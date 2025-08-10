from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import (
    CategoriesViewSet, 
    ProductsViewSet, 
    VendorsViewSet, 
    CustomersViewSet,
    InventoryViewSet, 
    ProductImagesViewSet, 
    OrdersViewSet, 
    OrderItemsViewSet,
    InventoryReportAPIView,
    CustomerCreateView
)

router = DefaultRouter()
router.register(r'categories', CategoriesViewSet)
router.register(r'products', ProductsViewSet)
router.register(r'vendors', VendorsViewSet)
# router.register('customers', CustomersViewSet)
router.register(r'inventory', InventoryViewSet)
router.register(r'product-images', ProductImagesViewSet)
router.register(r'orders', OrdersViewSet)
router.register(r'order-items', OrderItemsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('report/', InventoryReportAPIView.as_view(), name='inventory-report'),  # <-- add this here instead
    # path('customers/create/', CustomerCreateView.as_view(), name='customer-create'),
    path('customers/create/', CustomerCreateView.as_view(), name='customer-create'),

]
