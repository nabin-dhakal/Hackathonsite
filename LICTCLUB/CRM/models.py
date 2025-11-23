from django.db import models
from django.contrib.auth.models import User
from core.models import TeamRegistration
from django.core.validators import MinLengthValidator
from django.core.exceptions import ValidationError

class CRMTeam(models.Model):
    STATUS_CHOICES = (
        ('SELECTED', 'Selected'),
        ('NOT_SELECTED', 'Not Selected'),
        ('PENDING', 'Pending'),
    )

    registration = models.OneToOneField(TeamRegistration, on_delete=models.CASCADE)

    Team_name = models.CharField(
        max_length=100,
        unique=True,
        default='',
        validators=[MinLengthValidator(3)],
        blank= True
    )
    institution = models.CharField(max_length=200, default='',blank=True)
    leader_name = models.CharField(max_length=100, blank=True)
    leader_email = models.EmailField(blank=True)
    leader_phone = models.CharField(max_length=15, blank=True)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    decided_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    decided_at = models.DateTimeField(auto_now=True)
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.registration.team_name} ({self.institution}) - {self.status}"

    def save(self, *args, **kwargs):

        if not self.pk:  
            if self.registration:
                self.Team_name = self.registration.team_name
                self.institution = self.registration.institution
                self.leader_name = self.registration.member1_name
                self.leader_email = self.registration.member1_email
                self.leader_phone = self.registration.member1_phone
        else:
            pass

        super().save(*args, **kwargs)
