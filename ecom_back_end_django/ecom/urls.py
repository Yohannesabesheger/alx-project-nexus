from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # This links /api/ to your app
    path('apia/', include('admin_api.urls')),
    path('apic/', include('customerapi.urls')),

]
