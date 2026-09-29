import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CartBar } from '../../../../src/shared/components/TabBar/TabBarCart'
import { House, ShoppingCartPlus, Heart, Bus } from 'lucide-react-native';
import { CartList } from '../../../shared/components/commonflatlistdata/CartFlatlist'
import { router } from 'expo-router';
import { Counter } from '../../../../src/features/cart/components/CartCounter'
import { CartButton } from '../../../../src/features/cart/components/CartButton'
import Colors from '../../../shared/themes/colors';
import { useCart } from '../../../../src/shared/components/context/CartContext'

const Cart = () => {
    const { cartItems, addToCart } = useCart()

    return (
        <View style={styles.container}>
            <FlatList
                data={[]}
                keyExtractor={(_, index) => index.toString()}
                renderItem={() => null}
                ListHeaderComponent={
                    <View>
                        <SafeAreaView>
                            <CartBar />
                            <View style={styles.addressContainer}>
                                <House fill='#000000' size={16} />
                                <Text style={styles.addressText}>Home : 13 -22B Nagercoil,kanyakumari,Tamilnadu</Text>
                            </View>
                            <View style={styles.lineSeparator} />
                        
                            {cartItems.length === 0 ? (
                                <View style={styles.cartContainer}>
                                    <ShoppingCartPlus size={80} color={Colors.cartColor} />
                                    <Text style={styles.emptyMessage}>Your Cart is Empty</Text>
                                    <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
                                        <Text style={styles.shoppingButton}>Start shopping</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <View style={styles.cartProductContainer}>
                                    {cartItems.map((item, index) => {
                                        return (
                                            <View style={{ marginBottom: 16 }} key={item.id ? item.id.toString() + index : index}>  
                                                <View style={styles.productContainer}>
                                                    <View>    
                                                        <View style={styles.cartImageContainer}>
                                                            <Image 
                                                                source={
                                                                    (() => {
                                                                        const imgSource = Array.isArray(item.phoneimage) ? item.phoneimage[0] : item.phoneimage;
                                                                        if (typeof imgSource === 'string') {
                                                                            return { uri: imgSource };
                                                                        }
                                                                        return imgSource;
                                                                    })()
                                                                } 
                                                                style={styles.cartProductImage} 
                                                            />
                                                        </View>
                                                        <View style={{ backgroundColor: 'white', width: '90%', marginLeft: 13, justifyContent: 'center', borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                                                            <Counter />
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.itemName}>{item.name}</Text>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text style={styles.priceDecrease}>11 cm x 7 cm</Text>
                                                            <Text style={styles.priceDecrease}>{item.personbuyed}</Text>
                                                        </View>
                                                        
                                                        <View style={{ flexDirection: 'row', gap: 10, marginLeft: 12 }}>
                                                            <Image source={require('../../../../assets/cartScreenLogo/rating.png')} style={styles.assuredImage} />
                                                            <Image source={require('../../../../assets/cartScreenLogo/assured.png')} style={styles.assuredImage} />
                                                        </View>
                                                        
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Text style={styles.priceDecrease}>{item.pricedecrease}</Text>
                                                            <Text style={styles.priceDecrease}>{item.price}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.deliveryContainer}>
                                                    <Bus size={18} /> 
                                                    <Text style={styles.deliveryText}>Delivery by Sat, 8 Sep </Text>
                                                </View>
                                                <View>
                                                    <CartButton productId={item.id}/>
                                                </View>
                                            </View>
                                        )
                                    })}
                                </View>
                            )}
                            
                            <Text style={styles.suggestionText}>Suggested for You</Text>
                            <CartList setChangeData={addToCart} />
                            
                            <View style={styles.wishlistContainer}>
                                <Text style={styles.wishlistText}>Your Wishlist</Text>
                                <Heart size={20} color={'red'} />
                            </View>
                            <CartList setChangeData={addToCart} />
                        </SafeAreaView>
                    </View>
                }
            />    
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, marginBottom: 70 },
    addressContainer: { flexDirection: 'row', marginTop: 12, backgroundColor: Colors.addressColor, marginHorizontal: 20, padding: 6, gap: 4, borderRadius: 8 },
    addressText: { fontSize: 12 },
    lineSeparator: { borderWidth: 0.5, marginTop: 8, borderColor: Colors.rippleColor },
    cartContainer: { marginTop: 20, backgroundColor: Colors.rippleColor, alignItems: 'center', marginHorizontal: 14, borderRadius: 10, paddingVertical: 50, gap: 6 },
    cartLogo: { width: 100, height: 100, resizeMode: 'cover' },
    emptyMessage: { fontSize: 18, fontWeight: '600' },
    shoppingButton: { color: 'white', fontWeight: '600', backgroundColor: Colors.cartColor, paddingVertical: 6, paddingHorizontal: 24, borderRadius: 8, marginTop: 10 },
    suggestionText: { fontSize: 18, fontWeight: '600', marginTop: 18, marginLeft: 14 },
    suggestionContainer: { marginLeft: 12, marginTop: 20 },
    productImage: { width: 100, height: 120, resizeMode: 'contain' },
    name: { fontSize: 10, fontWeight: '600', width: 100, paddingTop: 6 },
    price: { fontSize: 12, fontWeight: '600' },
    priceLine: { borderWidth: 1, width: 42, position: 'absolute', top: 147 },
    wishlistContainer: { flexDirection: 'row', marginTop: 16, marginLeft: 12, gap: 6, alignItems: 'center' },
    wishlistText: { fontSize: 18, fontWeight: '600' },
    cartProductImage: { width: 100, height: 100, resizeMode: 'contain' },
    cartProductContainer: { marginTop: 20 },
    cartImageContainer: { backgroundColor: Colors.rippleColor, borderTopLeftRadius: 6, borderTopRightRadius: 6, width: 100, marginLeft: 14, paddingBottom: 1 },
    assuredImage: { width: 40, height: 20, resizeMode: 'contain' },
    productContainer: { flexDirection: 'row' },
    itemName: { marginLeft: 10, fontSize: 12 },
    priceDecrease: { fontSize: 12, marginLeft: 12 },
    lineprice: { borderWidth: 1, width: 50, position: 'absolute', top: 60, left: 40, opacity: 0.5 },
    notPrice: { fontSize: 12, marginLeft: 12, opacity: 0.5 },
    deliveryContainer: { borderRadius: 8, backgroundColor: Colors.rippleColor, width: '90%', marginLeft: 12, marginTop: 16, paddingVertical: 6, paddingHorizontal: 12, flexDirection: 'row', gap: 6, alignItems: 'center' },
    deliveryText: { fontSize: 11 }
})

export default Cart;
