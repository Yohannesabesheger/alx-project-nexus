import { Image,Text, TouchableOpacity, View } from "react-native";
import cardstyle from "../../styles/product/ProductViewCard.style";    
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LINK } from "@/constants";

const ProductCard = ({item}) => {
  const navigation = useNavigation();
  console.log('https://gojo.besheger.com/api'+item.product_image);

  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('pages/product/ProductDetail',{item})}
    >
      <View style={cardstyle.container}>
            <View style={cardstyle.imageContainer}>
                <Image
              source={{ uri:LINK.baseLink+item.primary_image_url}}
              style={cardstyle.image}
            />
                </View>
                <View style={cardstyle.details}>
            {/* Add product details here */}
          <Text style={cardstyle.title} numberOfLines={1}>{item.product_name}</Text>
          <Text style={cardstyle.supplier}>{item.vendor_name}</Text>
          <Text style={cardstyle.price}>ETB {item.price}</Text>
          </View>
          <TouchableOpacity style={cardstyle.addBtn}>
            <Ionicons name="add" size={24} color="white" />

          </TouchableOpacity>
          </View>
          
    </TouchableOpacity> 
);
}
export default ProductCard;