from rest_framework import serializers
from product.models import (
    Categories, Products, Vendors, Customers,
    Inventory, ProductImages, Orders, OrderItems
)

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'

class ProductsSerializer(serializers.ModelSerializer):
    category = CategoriesSerializer(read_only=True)

    class Meta:
        model = Products
        fields = '__all__'

class VendorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendors
        fields = '__all__'

class CustomersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customers
        fields = '__all__'

class InventorySerializer(serializers.ModelSerializer):
    product = ProductsSerializer(read_only=True)
    vendor = VendorsSerializer(read_only=True)

    class Meta:
        model = Inventory
        fields = '__all__'

class ProductImagesSerializer(serializers.ModelSerializer):
    product = ProductsSerializer(read_only=True)

    class Meta:
        model = ProductImages
        fields = '__all__'

class OrdersSerializer(serializers.ModelSerializer):
    customer = CustomersSerializer(read_only=True)

    class Meta:
        model = Orders
        fields = '__all__'

class OrderItemsSerializer(serializers.ModelSerializer):
    order = OrdersSerializer(read_only=True)
    inventory = InventorySerializer(read_only=True)

    class Meta:
        model = OrderItems
        fields = '__all__'
        
class InventoryReportFlatSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source='product.name')
    product_description = serializers.CharField(source='product.description', allow_null=True)
    product_category = serializers.CharField(source='product.category.name', default=None)
    vendor_name = serializers.CharField(source='vendor.name')
    vendor_email = serializers.CharField(source='vendor.email', allow_null=True)
    vendor_phone = serializers.CharField(source='vendor.phone', allow_null=True)
    primary_image_url = serializers.SerializerMethodField()
    stock = serializers.IntegerField()
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    last_updated = serializers.DateTimeField()

    class Meta:
        model = Inventory
        fields = [
            'id',
            'product_name',
            'product_description',
            'product_category',
            'vendor_name',
            'vendor_email',
            'vendor_phone',
            'stock',
            'price',
            'last_updated',
            'primary_image_url',
        ]

    def get_primary_image_url(self, obj):
        primary_image = ProductImages.objects.filter(product=obj.product, is_primary=True).first()
        if primary_image:
            return primary_image.image_url
        # fallback: first image if no primary set
        first_image = ProductImages.objects.filter(product=obj.product).first()
        return first_image.image_url if first_image else None
