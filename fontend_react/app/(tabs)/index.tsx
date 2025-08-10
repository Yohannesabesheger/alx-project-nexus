import CarouselSlider from "@/components/home/carosel";
import ProductRow from "@/components/product/ProductRowList";
import Wellcome from "@/components/home/welcome";
import { styles } from "@/styles"; // adjust path if needed
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigator=useNavigation()
  return (
    <SafeAreaView>
      <View style={styles.appBarWraper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={28} color="black" />
          <Text style={styles.title}>Addis Ababa</Text>
          <View style={{alignItems:"flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity onPress={() => router.push("/pages/cart")}>
              <Fontisto name="shopping-bag" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>
    </View>
      <ScrollView>
        <Wellcome/>
        <CarouselSlider/>
        <View style={styles.newRival}>
            <Text style={styles.newRivalTitle}>New Rivals</Text>
          <TouchableOpacity onPress={()=>navigator.navigate("pages/product/NewRival")}>
            <Fontisto name='windows' size={20}/>
          </TouchableOpacity>
        </View>
        <ProductRow/>
      </ScrollView>
  </SafeAreaView>
    
  );
}
