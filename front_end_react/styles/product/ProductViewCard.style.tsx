import { COLORS, SIZES } from '@/constants';
import { StyleSheet } from 'react-native'
const cardstyle=StyleSheet.create({
    container: {
        width: 182,
        height: 280,
        marginEnd: SIZES.padding,
        borderRadius: 20,
        backgroundColor: COLORS.cardBack,
       // elevation:1
        
    },
    imageContainer: {
        flex: 1,
        width: 182,
        borderRadius: SIZES.small/2,
        overflow: 'hidden',
    
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    details:{
        padding: SIZES.small,
    },
    title: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.btnBack,
        marginTop: SIZES.base/2,
    },
    supplier: {
        fontSize: SIZES.h4,
        color: 'gray',
        marginTop: SIZES.base/4,
    },
    price: {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.text,
        marginTop: SIZES.base,
    },
    addBtn: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: COLORS.btnBack,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default cardstyle;
