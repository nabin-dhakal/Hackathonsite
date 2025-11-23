from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path("dashboard/", views.dashboard, name="dashboard"),
    path("dashboard/update/<int:team_id>/", views.update_team_status, name="update_team_status"),
    path("dashboard/send-bulk-email/", views.send_bulk_email, name="send_bulk_email"),
]
