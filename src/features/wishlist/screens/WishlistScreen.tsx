import{View,Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native'
import {ArrowLeft, ShoppingCart, LockKeyhole} from 'lucide-react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {router} from 'expo-router'
import Colors from '../../../shared/themes/colors';
import {WishlistButtons} from '../../../../src/features/wishlist/components/WishlistRowButtons'
import {useCart} from '../../../../src/shared/components/context/CartContext'

export const WishlistScreen = () => {
    const { wishlistItems, toggleWishlist } = useCart()
    return(
        <View style={styles.container}>
            <SafeAreaView>
            
            <View>
                <FlatList
                data={wishlistItems}
                numColumns={4}
                columnWrapperStyle={styles.rowContainer} 
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>(
                    <View style={styles.wishlistContainer}>
                        <Image 
                            source={item.phoneimage?.[0]} 
                            style={styles.productImage} 
                        />
                    </View>
                )}
                ListHeaderComponent={()=>{
                    return(
                      <View>  
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
                      </View>  
                    )
                }}
                ListEmptyComponent={()=>{
                    return(
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>Nothing to show here</Text>
                    </View>
                    )
                }}
                ListFooterComponent={()=>{
                    return(
                        <View>
                            {wishlistItems && wishlistItems.length > 0 ?(
                            <TouchableOpacity style={styles.privateButton}>
                                <Text>My Wishlist</Text>
                                <View style={styles.buttonContainer}>
                                    <LockKeyhole size={16} color={'black'}/>
                                    <Text>Private</Text>
                                </View>
                            </TouchableOpacity>
                            ):null
                        }
                        </View>
                    )
                }}
                />
            </View>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{flex:1, marginTop:10},
    headerContainer:{flexDirection:'row', backgroundColor:Colors.wishlistContainer, paddingLeft:12, paddingVertical:16, justifyContent:'space-between', paddingRight:20},
    headerText:{color:'white', fontSize:15},
    emptyContainer:{justifyContent:'center'},
    productImage:{height:100, width:80 },
    wishlistContainer:{},
    rowContainer:{backgroundColor:Colors.rippleColor, marginHorizontal:12, marginTop:20, paddingLeft:6, gap:6, paddingVertical:6, borderTopLeftRadius:8, borderTopRightRadius:8},
    buttonContainer:{flexDirection:'row', gap:6},
    privateButton:{marginHorizontal:12, paddingLeft:12, paddingVertical:12, gap:6,backgroundColor:'#fff', borderWidth:1, borderColor:Colors.rippleColor, borderBottomLeftRadius:8, borderBottomRightRadius:8 },
    emptyText:{fontSize:18, fontWeight:500, textAlign:'center', marginTop:120 }
})