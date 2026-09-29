import{View, FlatList, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import useProducts from '../../../features/search/api-data/ProductData'
import {ProductItem} from '../interface/ProductItems'


interface Prop{
    setChangeData: (value: ProductItem) => void;
}

export const CartList = ({setChangeData}:Prop) => {
    const{data} = useProducts()
    return(
            <View>
                <FlatList
                data={data?.slice(0,6)}
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
                            <TouchableOpacity onPress={()=>setChangeData(item)}>
                                <Text style={styles.cartButton}>Add to Cart</Text>
                            </TouchableOpacity>
                    </View>
                )}
                />
            </View>
    )
}
const styles = StyleSheet.create({
    suggestionContainer:{ marginLeft:12, marginTop:20, marginRight:10},
    productImage:{width:100, height:120, resizeMode:'contain' },
    name:{fontSize:10, fontWeight:600, width:100, paddingTop:6 },
    price:{fontSize:12, fontWeight:600, },
    priceLine:{borderWidth:1, width:42, position:'absolute', top:147},
    cartButton:{borderWidth:1, textAlign:'center', borderRadius:8, borderColor:'blue', color:'blue', marginTop:10, paddingVertical:2,fontSize:12 ,paddingHorizontal:2}
})