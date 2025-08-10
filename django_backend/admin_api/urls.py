from rest_framework import routers
from django.urls import path, include
from .views import (
    AdminOrdersViewSet, AdminProductsViewSet, AdminCustomersViewSet,
    AdminVendorsViewSet, AdminInventoryViewSet, AdminOrderItemsViewSet
)

router = routers.DefaultRouter()
router.register(r'orders', AdminOrdersViewSet)
router.register(r'products', AdminProductsViewSet)
router.register(r'customers', AdminCustomersViewSet)
router.register(r'vendors', AdminVendorsViewSet)
router.register(r'inventory', AdminInventoryViewSet)
router.register(r'order-items', AdminOrderItemsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
