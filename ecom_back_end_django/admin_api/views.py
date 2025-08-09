from rest_framework import viewsets, permissions
from product.models import Orders, Products, Customers, Vendors, Inventory, OrderItems
from .serializers import (
    OrdersSerializer, ProductsSerializer, CustomersSerializer,
    VendorsSerializer, InventorySerializer, OrderItemsSerializer
)

class AdminOrdersViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer
    permission_classes = [permissions.IsAdminUser]

class AdminProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    permission_classes = [permissions.IsAdminUser]

class AdminCustomersViewSet(viewsets.ModelViewSet):
    queryset = Customers.objects.all()
    serializer_class = CustomersSerializer
    permission_classes = [permissions.IsAdminUser]

class AdminVendorsViewSet(viewsets.ModelViewSet):
    queryset = Vendors.objects.all()
    serializer_class = VendorsSerializer
    permission_classes = [permissions.IsAdminUser]

class AdminInventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = [permissions.IsAdminUser]

class AdminOrderItemsViewSet(viewsets.ModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer
    permission_classes = [permissions.IsAdminUser]
