import AppBar from '@/components/common/AppBar';
import { cartStyles as style } from '@/styles';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

const cartItems = [
  {
    id: '1',
    name: 'Organic Apple',
    price: 4.99,
    quantity: 2,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: '2',
    name: 'Almond Milk',
    price: 6.5,
    quantity: 1,
    image: 'https://via.placeholder.com/60',
  },
];

export default function CartPage() {
  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const renderItem = ({ item }: { item: typeof cartItems[0] }) => (
    <View style={style.itemContainer}>
      <Image source={{ uri: item.image }} style={style.image} />
      <View style={style.itemDetails}>
        <Text style={style.itemName}>{item.name}</Text>
        <Text style={style.itemQuantity}>Qty: {item.quantity}</Text>
        <Text style={style.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <View style={style.container}>
      <AppBar title="My Cart" />

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={style.listContainer}
      />

      <View style={style.summaryContainer}>
        <Text style={style.totalLabel}>Total:</Text>
        <Text style={style.totalValue}>${getTotal()}</Text>
        <TouchableOpacity style={style.checkoutBtn}>
          <Text style={style.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
