import { wellComeStyel } from "@/components/home/welcome.styel";
import ProductViewCard from "@/components/product/ProductCard";
import useFetch from "@/hooks/useFetches";
import { styles } from "@/styles/stl2";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ProductSearchPage() {
  const [query, setQuery] = useState("");
  const {data,isLoading,error}=useFetch()
  const filtered = data.filter(p =>
    p.product_name.toLowerCase().includes(query.toLowerCase())
  );
  const renderItem = ({ item }: any) => (
    <View style={{marginBottom:10}}>
      <ProductViewCard item={item} />
    </View>   
  );
  return (
    <View style={styles.containerWithPadding}>
      <View style={wellComeStyel.serchContainer}>
      <TouchableOpacity >
        <Ionicons name="search" size={24}  style={wellComeStyel.searchIcon}/>    
      </TouchableOpacity>
     
       <View style={wellComeStyel.searchWrapper}>
        <TextInput
        style={wellComeStyel.searchInput}
          value={query}
          placeholderTextColor='#fff'
          placeholder="Search products..."
          onChangeText={setQuery}
      />
      </View> 
    </View>
      

       {filtered.length > 0 ? (
        <FlatList
          data={filtered}
          keyExtractor={(item)=>item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={styles.productListContainer}
        />
      ) : (
        <Text style={styles.noResultsText}>No products found.</Text>
      )} 
    </View>
  );
}
