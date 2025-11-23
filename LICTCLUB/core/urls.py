from django.urls import path
from .views import RegistrationView

urlpatterns = [
    path('teams/', RegistrationView.as_view(), name='team-list'),
    path('teams/<int:team_id>/', RegistrationView.as_view(), name='team-detail'),
]