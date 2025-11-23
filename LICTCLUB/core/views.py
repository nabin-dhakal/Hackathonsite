from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from django.conf import settings
from .models import TeamRegistration
from .serializers import TeamRegistrationSerializer
import logging

logger = logging.getLogger(__name__)

@method_decorator(csrf_exempt, name='dispatch')
class RegistrationView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, team_id=None, format=None):
        try:
            if team_id:
                team = get_object_or_404(TeamRegistration, id=team_id)
                serializer = TeamRegistrationSerializer(team)
                return Response(serializer.data)
            else:
                teams = TeamRegistration.objects.all().order_by('-created_at')
                serializer = TeamRegistrationSerializer(teams, many=True)
                return Response({
                    'count': teams.count(),
                    'teams': serializer.data
                })
        except Exception as e:
            logger.error(f"Error in GET request: {str(e)}")
            return Response(
                {'error': 'Internal server error'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def post(self, request, format=None):
        try:
            data = request.data.dict() if hasattr(request.data, 'dict') else request.data.copy()
            files = request.FILES

            logger.debug(f"Received data: {data}")
            logger.debug(f"Received files: {files}")

            members_data = {}
            for i in range(4):
                member_prefix = f'members[{i}]'
                member_fields = {
                    'full_name': 'name',
                    'email': 'email',
                    'phone': 'phone',
                    'gender': 'gender',
                    'tshirt': 'tshirt',
                    'food_preference': 'food'
                }

                for frontend_field, model_field in member_fields.items():
                    field_name = f'{member_prefix}[{frontend_field}]'
                    if field_name in data:
                        members_data[f'member{i+1}_{model_field}'] = data[field_name]

            registration_data = {
                'team_name': data.get('team_name', '').strip(),
                'city': data.get('city', '').strip(),
                'project_idea': data.get('project_idea', '').strip(),
                'theme': data.get('theme', '').strip(),
                'tech_stack': data.get('tech_stack', '').strip(),
                'institution': data.get('institution', '').strip(),
                'payment_proof': files.get('payment_proof'),
                **members_data
            }

            logger.debug(f"Processed registration data: {registration_data}")

            serializer = TeamRegistrationSerializer(data=registration_data)

            if serializer.is_valid():
                team = serializer.save()
                return Response(
                    {
                        'status': 'success',
                        'message': 'Team registered successfully',
                        'team_id': team.id,
                        'data': TeamRegistrationSerializer(team).data
                    },
                    status=status.HTTP_201_CREATED
                )

            logger.error(f"Validation errors: {serializer.errors}")
            return Response(
                {
                    'status': 'error',
                    'message': 'Invalid data',
                    'errors': serializer.errors
                },
                status=status.HTTP_400_BAD_REQUEST
            )

        except Exception as e:
            logger.error(f"Error in POST request: {str(e)}", exc_info=True)
            return Response(
                {
                    'status': 'error',
                    'message': 'Internal server error',
                    'detail': str(e)
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
