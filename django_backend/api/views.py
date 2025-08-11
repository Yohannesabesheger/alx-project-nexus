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

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny()]
        return [IsAuthenticated()]


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


# class CustomerCreateView(generics.CreateAPIView):
#     queryset = Customers.objects.all()
#     serializer_class = CustomersSerializer

#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         if serializer.is_valid():
#             self.perform_create(serializer)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class CustomerCreateView(generics.CreateAPIView):
    queryset = Customers.objects.all()
    serializer_class = CustomersSerializer
    permission_classes = [AllowAny]  # Allow anyone to create (e.g., sign up)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # Automatically raises 400 if invalid
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


