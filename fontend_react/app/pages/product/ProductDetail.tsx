import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS } from "@/constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import pstyle from "../../../styles/product/product_details_styles";

const ProductDetail = () => {
  const route = useRoute();
  const { item } = route.params;
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const totalPrice = (item.price * count).toFixed(2);

  const handleAddToCart = () => {
    Alert.alert(
      "Added to Cart",
      `${item.product_name} x${count} added to cart\nTotal: ETB ${totalPrice}`
    );
  };

  return (
    <View style={pstyle.container}>
      {/* Top Row with Back and Favorite */}
      <View style={pstyle.uperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color={COLORS.black} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {/* Product Image */}
      <Image source={{ uri: item.product_image }} style={pstyle.image} />

      {/* Details Section */}
      <View style={pstyle.details}>
        <View style={pstyle.titleRow}>
          <Text style={pstyle.title}>{item.product_name}</Text>
          <View style={pstyle.priceWraper}>
            <Text style={pstyle.price}>ETB {item.price}</Text>
          </View>
        </View>

        {/* Rating and Quantity */}
        <View style={pstyle.ratingRow}>
          <View style={pstyle.rating}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name="star"
                size={20}
                color={star <= 4 ? COLORS.success : COLORS.muted}
              />
            ))}
          </View>
          <View style={pstyle.rating}>
            <View style={pstyle.ratingIcon}>
              <TouchableOpacity onPress={decrement}>
                <SimpleLineIcons name="minus" size={28} color={COLORS.muted} />
              </TouchableOpacity>
              <Text style={pstyle.ratingText}>{count}</Text>
              <TouchableOpacity onPress={increment}>
                <SimpleLineIcons name="plus" size={28} color={COLORS.muted} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Description */}
        <Text style={pstyle.descriptionTitle}>Description</Text>
        <Text style={pstyle.description}>{item.description}</Text>

        {/* Total Price */}
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", color: COLORS.primary }}>
            Total Price: ETB {totalPrice}
          </Text>
        </View>
      </View>

      {/* Location and Delivery Info */}
      <View style={{ marginBottom: 10 }}>
        <View style={pstyle.location}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="location-outline" size={24} />
            <Text style={{ marginLeft: 4 }}>Addis Ababa</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={24} />
            <Text style={{ marginLeft: 4 }}>Free Delivery</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={pstyle.cartRow}>
          <TouchableOpacity onPress={() => Alert.alert("Buying now")} style={pstyle.cartBtn}>
            <Text style={pstyle.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAddToCart} style={pstyle.addCart}>
            <Fontisto name="shopping-bag" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
