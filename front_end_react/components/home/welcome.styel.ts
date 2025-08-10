import { COLORS, SIZES } from "@/constants";
import { StyleSheet, TextStyle } from "react-native";


const wellComeStyel=StyleSheet.create({
  appBarWraper: {
    backgroundColor: '#fff',
    paddingHorizontal: SIZES.margin,
    paddingTop: 10,
    paddingBottom: 10,
  },
container:{
  width: '100%',
  paddingHorizontal: SIZES.margin,
   
},

wellcomeText: {
  fontSize: SIZES.largeText,
  fontWeight: 'bold',
  marginBottom: 10,
   color:  '#000',
},
serchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  alignContent: 'center',
  marginHorizontal: SIZES.padding,
  backgroundColor: COLORS.textBack,
  borderRadius: SIZES.radius*2,
  marginVertical: SIZES.base,
  height: 50,
},
searchIcon: {
  marginHorizontal: SIZES.base,
  color: COLORS.white,
  marginTop: SIZES.base,
},
searchWrapper: {
  flex: 1,
  marginRight: SIZES.base,
  borderRadius: SIZES.radius,
},
searchInput: {
  fontFamily: 'Regular',
 fontSize:20,
  width: '100%',
  color:'#fff',
  height: SIZES.inputHeight,
  paddingHorizontal: SIZES.padding,

},
searchBtn: {
  width: 50,
  height: '100%',
  borderRadius: SIZES.radius,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: COLORS.primary,
  marginRight: SIZES.margin,
}
});

const dynamicText = (color: string = "#000"): TextStyle => ({
  fontSize: SIZES.h2,
  fontWeight: 'bold',
  marginBottom: SIZES.base,
  color,
});

  export { dynamicText, wellComeStyel };

