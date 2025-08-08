from django.db import models

class Product(models.Model):
    title=models.CharField(max_length=50)
    description=models.CharField(max_length=120)
    price=models.DecimalField(max_digits=1000,decimal_places=2,default=99.99)
    