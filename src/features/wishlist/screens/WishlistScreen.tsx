import{View,Text, StyleSheet, TouchableOpacity} from 'react-native'
import {ArrowLeft, ShoppingCart} from 'lucide-react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {router} from 'expo-router'
import Colors from '../../../shared/themes/colors';
import {WishlistButtons} from '../../../../src/features/wishlist/components/WishlistRowButtons'

export const WishlistScreen = () => {
    return(
        <View style={styles.container}>
            <SafeAreaView>
            <View style={styles.headerContainer}>
                <View style={{flexDirection:'row', gap:14}}>
                    <TouchableOpacity onPress={()=>router.back()}>
                        <ArrowLeft size={20} color={'white'}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Wishlist & Collections</Text>
                </View>
                <ShoppingCart size={20} color={'white'}/>
            </View>
            <WishlistButtons/>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{flex:1, marginTop:10},
    headerContainer:{flexDirection:'row', backgroundColor:Colors.wishlistContainer, paddingLeft:12, paddingVertical:16, justifyContent:'space-between', paddingRight:20},
    headerText:{color:'white', fontSize:15},
})