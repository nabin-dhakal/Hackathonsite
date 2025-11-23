from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('secure-admin/', admin.site.urls),
    path('api/',include('core.urls')),
    path('',include('CRM.urls')),
]