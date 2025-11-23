from django.db import models
from django.core.validators import MinLengthValidator
from django.core.exceptions import ValidationError

class TeamRegistration(models.Model):
    team_name = models.CharField(
        max_length=100,
        unique=True,
        validators=[MinLengthValidator(3)]
    )
    institution = models.CharField(max_length=200, default='')
    city = models.CharField(max_length=100, default='')
    
    project_idea = models.TextField(default='')
    theme = models.CharField(max_length=100, default='')
    tech_stack = models.CharField(max_length=200, default='')
    
    payment_proof = models.ImageField(upload_to='payment_proofs/')
    
    
    member1_name = models.CharField(max_length=100, default='')
    member1_email = models.EmailField(default='')
    member1_phone = models.CharField(max_length=15, default='')
    member1_gender = models.CharField(max_length=10, default='')
    member1_tshirt = models.CharField(max_length=5, default='')
    member1_food = models.CharField(max_length=10, default='')
    
    member2_name = models.CharField(max_length=100, default='')
    member2_email = models.EmailField(default='')
    member2_phone = models.CharField(max_length=15, default='')
    member2_gender = models.CharField(max_length=10, default='')
    member2_tshirt = models.CharField(max_length=5, default='')
    member2_food = models.CharField(max_length=10, default='')
    
    member3_name = models.CharField(max_length=100, default='')
    member3_email = models.EmailField(default='')
    member3_phone = models.CharField(max_length=15, default='')
    member3_gender = models.CharField(max_length=10, default='')
    member3_tshirt = models.CharField(max_length=5, default='')
    member3_food = models.CharField(max_length=10, default='')
    
    member4_name = models.CharField(max_length=100, blank=True, null=True, default=None)
    member4_email = models.EmailField(blank=True, null=True, default=None)
    member4_phone = models.CharField(max_length=15, blank=True, null=True, default=None)
    member4_gender = models.CharField(max_length=10, blank=True, null=True, default=None)
    member4_tshirt = models.CharField(max_length=5, blank=True, null=True, default=None)
    member4_food = models.CharField(max_length=10, blank=True, null=True, default=None)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.team_name} ({self.institution})"

    def clean(self):
        has_member4 = any([
            self.member4_name,
            self.member4_email,
            self.member4_phone,
            self.member4_gender,
            self.member4_tshirt,
            self.member4_food
        ])
        
        if has_member4 and not all([
            self.member4_name,
            self.member4_email,
            self.member4_phone,
            self.member4_gender,
            self.member4_tshirt,
            self.member4_food
        ]):
            raise ValidationError("Either fill all member 4 fields or leave them all blank")

    class Meta:
        ordering = ['-created_at']