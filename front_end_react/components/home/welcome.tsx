import { COLORS } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { dynamicText, wellComeStyel } from "./welcome.styel";


const Wellcome = () => {
  const naviagations=useNavigation();
  return (
    <>
    <View style={wellComeStyel.container}>
        <Text style={dynamicText(COLORS.darkGray)}>Find The Most</Text>
        <Text style={dynamicText(COLORS.primary)}>
          {""}
          Hand Made Product/Home
          </Text>
      
    </View>
    <View style={wellComeStyel.serchContainer}>
      <TouchableOpacity >
        <Ionicons name="search" size={30}  style={wellComeStyel.searchIcon}/>    
      </TouchableOpacity>
       <View style={wellComeStyel.searchWrapper}>
        <TextInput style={wellComeStyel.searchInput}
          value=""
         // placeholderTextColor="white
          placeholder="What are you looking for?"
          onPressIn={() => naviagations.navigate("search")}
      />
      </View> 
    </View>
    </>

  );
}
export default Wellcome;