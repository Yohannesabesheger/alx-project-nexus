from rest_framework import serializers
from product.models import (
    Categories, Products, Vendors, Customers,
    Inventory, ProductImages, Orders, OrderItems
)
from django.contrib.auth.models import User

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
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(write_only=True)
    first_name = serializers.CharField(write_only=True, required=False)
    last_name = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = Customers
        fields = [
            'id', 'username', 'password', 'email', 'first_name', 'last_name',
            'phone', 'address', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']

    def create(self, validated_data):
        username = validated_data.pop('username')
        password = validated_data.pop('password')
        email = validated_data.pop('email')
        first_name = validated_data.pop('first_name', '')
        last_name = validated_data.pop('last_name', '')

        # Create the Django User
        user = User.objects.create_user(
            username=username,
            password=password,
            email=email,
            first_name=first_name,
            last_name=last_name
        )

        # Create the linked Customer
        customer = Customers.objects.create(user=user, **validated_data)
        return customer

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

