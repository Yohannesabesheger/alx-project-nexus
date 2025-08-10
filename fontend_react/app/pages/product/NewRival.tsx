import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useFetch from "@/hooks/useFetches";
import styles  from "../../../styles/product/list.style";


export default function ProductListScreen() {
  const navigation = useNavigation();
  const { data, isLoading } = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data?.filter((item: any) =>
    item.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
    onPress={() => navigation.navigate('pages/ProductDetail',{item})}
  >
    <View style={styles.card}>
      <Image source={{ uri: item.product_image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={2}>
          {item.product_name}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back-circle" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Arrivals</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        placeholderTextColor="#888"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {/* Product Grid */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#009688" style={{ marginTop: 30 }} />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={3}
          contentContainerStyle={styles.grid}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      )}
    </View>
  );
}

