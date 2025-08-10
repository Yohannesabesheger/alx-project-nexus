from rest_framework.permissions import (IsAuthenticated,AllowAny)
from rest_framework import viewsets
from product.models import (
    Categories, Products, Vendors, Customers,
    Inventory, ProductImages, Orders, OrderItems
)
from .serializers import (
    CategoriesSerializer,
    ProductsSerializer, 
    VendorsSerializer, 
    CustomersSerializer,
    InventorySerializer, 
    ProductImagesSerializer, 
    OrdersSerializer, 
    OrderItemsSerializer,
    InventoryReportFlatSerializer
)
from rest_framework import generics

class CategoriesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer

class ProductsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class VendorsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vendors.objects.all()
    serializer_class = VendorsSerializer

class CustomersViewSet(viewsets.ModelViewSet):
    queryset = Customers.objects.all()
    serializer_class = CustomersSerializer
    permission_classes = [IsAuthenticated]

class InventoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

class ProductImagesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ProductImages.objects.all()
    serializer_class = ProductImagesSerializer

class OrdersViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

class OrderItemsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = OrderItems.objects.all()
    serializer_class = OrderItemsSerializer

class InventoryReportAPIView(generics.ListAPIView):
    queryset = Inventory.objects.select_related('product', 'vendor').all()
    serializer_class = InventoryReportFlatSerializer

