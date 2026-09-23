import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../stylesheet/ProductStylesheet'
import { MoveLeft, Heart, CornerUpRight , MoveDown, IndianRupee, Plus, ShoppingCart} from 'lucide-react-native';
import data from '../product-data/ProductData'
import{router} from 'expo-router'
import { useLocalSearchParams } from 'expo-router';


export default function ProductScreen() {
    const[active, setActive] = useState(false)
    const { query } = useLocalSearchParams()
    
    const handlePress = () => {
    setActive(!active);
  };

    const handleSearch = () => {
        if(query === 'iphone'){return data.slice(0,1)}
        if(query === 'samsung'){return data.slice(1,2)}
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>router.back()}>
                <MoveLeft style={styles.leftIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartIcon} onPress={handlePress}>
                {active === true ? <Heart fill='red' /> : <Heart />}
            </TouchableOpacity>

            <FlatList
                data={handleSearch()}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.imageContainer}>
                            <FlatList
                                data={item.phoneimage}
                                horizontal
                                snapToInterval={393 + 6}
                                decelerationRate='normal'
                                keyExtractor={(_, index) => index.toString()}
                                renderItem={({ item: image }) => (
                                    <Image source={image} style={styles.phoneImage} />
                                )}
                            />
                            <CornerUpRight style={styles.upArrowIcon} />
                        </View>
                        <Text style={styles.variantSelectText}>{item.variant.select}</Text>
                        <View style={styles.lineSeparator}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.variantColorText}>{item.variant.color}</Text>
                            <Text style={styles.variantColorOptionText}>{item.variant.colorMoreOptions}</Text>
                        </View>
                        <View style={styles.lineSeparator}/>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.variantStorageText}>{item.variant.storage}</Text>
                            <Text style={styles.variantStorageOptionText}>{item.variant.storageMoreOptions}</Text>
                        </View>
                        <View style={styles.lineSeparator}/>
                        <Text style={styles.phoneName}>{item.name}</Text>
                        <View style={styles.ratingContainer}>
                            <Image source={require('../../../../assets/iphoneScreen/rating.png')} style={styles.ratingImage} />
                            <Text style={styles.ratingText}>{item.rating}</Text>
                            <Text style={styles.ratingLabelText}>{item.ratingLabel}</Text>
                            <Image source={require('../../../../assets/iphoneScreen/assured.png')} style={styles.assuredImage} />
                        </View>
                        <Text style={styles.price}>{item.price}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.emiPlan}>{item.emiPlan}</Text>
                            <Text style={styles.detailButton}>Detail</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <MoveDown size={17} style={styles.downArrow}/>   
                            <Text style={styles.priceDecreaseText}>{item.pricedecrease}</Text>
                            <IndianRupee size={15} style={styles.rupeeIcon}/>
                            <Text style={styles.notThisText}>{item.notthis}</Text>
                            <IndianRupee size={15} style={styles.rupeePriceIcon}/>
                            <Text style={styles.priceText}>{item.ratingCount}</Text>
                        </View>
                        <View style={styles.priceLineSeparator}/>
                        <View style={styles.payContainer}>
                            <Text style={styles.payOption}>Or Pay  </Text>
                            <IndianRupee size={15} style={styles.rupeeOptionIcon}/>
                            <Text style={styles.payOptionText}>{item.payOption}</Text>
                            <Image source={require('../../../../assets/iphoneScreen/coin.png')} style={styles.coinImage} />
                            <Text style={styles.coinOption}>100</Text>
                        </View>  
                        <View style={styles.packageFeeContainer}>
                                <Plus size={14} style={styles.plusIcon}/>
                                <IndianRupee size={12} style={styles.rupeeOptionIcon}/>
                                <Text style={styles.packingFeeText}>{item.packagingFee}</Text>
                        </View>   
                        <Text style={styles.bankOffer}>{item.bankoffer}</Text>  
                        <TouchableOpacity>
                            <Text style={styles.applyNowButton}>Apply now</Text>
                        </TouchableOpacity> 
                    </View>
                )}
            />
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity onPress={()=>router.push('/cart')}>
                    <ShoppingCart size={24} style={styles.cartIcon}/>
                </TouchableOpacity>
                <View style={styles.emiContainer}>
                <Text style={styles.emiText}>Pay With EMI</Text>
                <Text style={styles.emiTime}>From ₹10,499/m</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.buyButton}>Buy now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}