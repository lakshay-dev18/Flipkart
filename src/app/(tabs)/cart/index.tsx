import{View,Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {CartBar} from '../../../../src/shared/components/TabBar/TabBarCart'
import { House, ShoppingCartPlus} from 'lucide-react-native';
import useProducts from '../../../../src/features/search/api-data/ProductData'

const Cart = () => {
    const{data} = useProducts()
    return(
        <View style={styles.container}>
        <SafeAreaView>
            <CartBar/>
            <View style={styles.addressContainer}>
                <House fill='#000000' size={16} />
                <Text style={styles.addressText}>Home : 13 -22B Nagercoil,kanyakumari,Tamilnadu</Text>
            </View>
            <View style={styles.lineSeparator}/>
            <View style={styles.cartContainer}>
                <ShoppingCartPlus size={80} color={'#2c61c9'}/>
                <Text style={styles.emptyMessage}>Your Cart is Empty</Text>
                <TouchableOpacity>
                    <Text style={styles.shoppingButton}>Start shopping</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.suggestionText}>Suggested for You</Text>
            <View>
                <FlatList
                data={data}
                horizontal
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>(
                    <View style={styles.suggestionContainer}>
                        <Image source={{uri: item.phoneimage}} style={styles.productImage}/>
                        <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                        <View style={{flexDirection:'row', gap:5}}>
                            <Text style={styles.price}>{item.notthis}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                            <View style={styles.priceLine}/>
                    </View>
                )}
                />
            </View>
        </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{flex:1},
    addressContainer:{flexDirection:'row', marginTop:12, backgroundColor:'#E2E8F0', marginHorizontal:20, padding:6, gap:4, borderRadius:8},
    addressText:{fontSize:12},
    lineSeparator:{borderWidth:0.5, marginTop:8, borderColor: 'rgba(0, 0, 0, 0.1)'},
    cartContainer:{marginTop:20, backgroundColor:'rgba(0, 0, 0, 0.1)',  alignItems:'center', marginHorizontal:14, borderRadius:10, paddingVertical:50, gap:6},
    cartLogo:{width:100, height:100, resizeMode:'cover'},
    emptyMessage:{fontSize:18, fontWeight:600},
    shoppingButton:{color:'white', fontWeight:600, backgroundColor:'#2c61c9', paddingVertical:6, paddingHorizontal:24, borderRadius:8, marginTop:10},
    suggestionText:{fontSize:18, fontWeight:600, marginTop:28, marginLeft:14},
    suggestionContainer:{ marginLeft:12, marginTop:20},
    productImage:{width:100, height:120, resizeMode:'contain' },
    name:{fontSize:10, fontWeight:600, width:100, paddingTop:6 },
    price:{fontSize:12, fontWeight:600, },
    priceLine:{borderWidth:1, width:42, }
})
export default Cart;