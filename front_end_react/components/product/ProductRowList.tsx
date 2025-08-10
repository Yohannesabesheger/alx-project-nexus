import { styles } from "@/styles";
import React from "react";
import { ActivityIndicator, FlatList, View,Text } from "react-native";
import ProductCard from "./ProductCard";
import useFetch from "@/hooks/useFetches";
import { SIZES } from "@/constants";


const ProductRow = () => {
  const {data,isLoading,error}=useFetch()
  return (
    <View style={styles.container}>
      {isLoading?(
        <ActivityIndicator size={50} color='red'/>
      ):error?(
        <Text>Something went wrong</Text>
      ):(<FlatList
      data={data}
      //keyExtractor={(item)=>item.id}
      renderItem={({item})=><ProductCard item={item}/>}
      horizontal
      contentContainerStyle={{columnGap:SIZES.small}}
      />)}
    </View>
  );
}
export default ProductRow;