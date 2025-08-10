import { COLORS, SIZES } from '@/constants';
import { StyleSheet } from 'react-native';
const pstyle =  StyleSheet.create({
    container: {
        flex: 1,
    },
    uperRow: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: '95%',
        top: 20,
        zIndex: 999,
    },
    
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    details: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    suppliers: { 
        fontSize: 18, 
                    fontWeight: 'bold',

            color: COLORS.muted
        },
    price: { 
        fontSize: 20, 
                fontWeight: 'bold',

        color: COLORS.success, 
        marginVertical: 10 
    },
    descriptionTitle:{
        fontSize: 20,
        fontWeight:'bold' 


    },
    description: { 
        fontSize: 16, 
        color: COLORS.black }
        ,
    priceWraper: {
    flexDirection: 'row',
    
    alignItems: 'center',
    //marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.secondary,
},
ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
},
rating:{
    flexDirection: 'row',
    fontSize: 16,
    color: COLORS.text,
    marginLeft: 10,
},
ratingIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
},
ratingText:{
color:COLORS.black,
fontFamily:'medium'
},
location:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    marginTop:10,
    padding:5,
    backgroundColor:COLORS.secondary,
    borderRadius:20
},
cartRow:{
    marginHorizontal:20,
    paddingBottom:SIZES.small,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    //width:SIZES.width-44
},
cartBtn:{
    width:SIZES.width*0.7,
    backgroundColor:COLORS.primary,
    padding:SIZES.base/2,
    paddingLeft:20,
    borderRadius:SIZES.radius*2,
    marginTop:10

}
,
cartTitle:{
    color:'white',
    fontSize:18,
    fontWeight:'semibold'
},
addCart:{
    width:37,
    height:37,
    backgroundColor:COLORS.black,
    padding:SIZES.base,
    borderRadius:SIZES.radius*2,
    marginTop:10,
    alignItems:'center'
}
});


export default pstyle;