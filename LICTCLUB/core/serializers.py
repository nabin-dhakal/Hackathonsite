from rest_framework import serializers
from .models import TeamRegistration

class TeamRegistrationSerializer(serializers.ModelSerializer):
    payment_proof = serializers.ImageField(required=True)
    
    class Meta:
        model = TeamRegistration
        fields = [
            'team_name', 'city', 'project_idea', 'theme', 'tech_stack', 'institution',
            'payment_proof',
            'member1_name', 'member1_email', 'member1_phone', 'member1_gender', 'member1_tshirt', 'member1_food',
            'member2_name', 'member2_email', 'member2_phone', 'member2_gender', 'member2_tshirt', 'member2_food',
            'member3_name', 'member3_email', 'member3_phone', 'member3_gender', 'member3_tshirt', 'member3_food',
            'member4_name', 'member4_email', 'member4_phone', 'member4_gender', 'member4_tshirt', 'member4_food',
            'created_at', 'updated_at'
        ]
        read_only_fields = [ 'created_at', 'updated_at']

    def validate(self, data):
        has_member4 = any([
            data.get('member4_name'),
            data.get('member4_email'),
            data.get('member4_phone'),
            data.get('member4_gender'),
            data.get('member4_tshirt'),
            data.get('member4_food')
        ])
        
        if has_member4 and not all([
            data.get('member4_name'),
            data.get('member4_email'),
            data.get('member4_phone'),
            data.get('member4_gender'),
            data.get('member4_tshirt'),
            data.get('member4_food')
        ]):
            raise serializers.ValidationError("Either fill all member 4 fields or leave them all blank")
        
        required_fields = ['name', 'email', 'phone', 'gender', 'tshirt', 'food']
        for i in range(1, 4):
            for field in required_fields:
                member_field = f'member{i}_{field}'
                if not data.get(member_field):
                    raise serializers.ValidationError(f"Member {i} missing required field: {field}")
        
        return data