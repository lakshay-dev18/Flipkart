import{StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import { router } from 'expo-router'
import { usePathname } from 'expo-router'
import Colors from '../../themes/colors'

export default function TabBar(){
    const pathname = usePathname()
    return(
    <View style={styles.container}>
        <TouchableOpacity style={pathname === '/(tabs)/home' ? styles.activeButton : styles.tabButton} onPress={()=>router.push('/(tabs)/home')}>
            <Image source={require('../../../../assets/TabBar/flipakrt.png')} style={styles.flipkartLogo}/>
            <Text style={styles.tabFlipkartButton}>Flipkart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pathname === '/(tabs)/play'?styles.activeButton : styles.tabButton} onPress={()=>router.push('/(tabs)/play')}>
            <Image source={require('../../../../assets/TabBar/pay.png')} style={styles.payLogo}/>
            <Text style={styles.tabPayButton}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pathname === '/(tabs)/cart'?styles.activeButton : styles.tabButton} onPress={()=>router.push('/(tabs)/cart')}>
            <Image source={require('../../../../assets/TabBar/travel.png')} style={styles.travelLogo}/>
            <Text style={styles.tabTravelButton}>Travel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pathname === '/(tabs)/home/grocery' ? styles.activeGroceryButton : styles.tabButton} onPress={()=>router.push('/(tabs)/home/grocery')}>
            <Image source={require('../../../../assets/TabBar/grocerry.png')} style={styles.grocerryLogo}/>
            <Text style={styles.tabGroceryButton}>Grocery</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{flexDirection:'row',marginTop:51, marginLeft:13, gap:10,},
    tabButton:{backgroundColor: Colors.backgroundColor, borderRadius:9, paddingTop:4},
    activeButton:{backgroundColor:Colors.TabActiveButton, borderRadius:9, paddingTop:4},
    activeGroceryButton:{backgroundColor:Colors.ActiveGroceryButton, borderRadius:9},
    flipkartLogo:{width:22, height:22, marginLeft:27},
    tabFlipkartButton:{paddingLeft:20, paddingRight:13,  },
    tabPayButton:{paddingLeft:24, paddingRight:13,},
    payLogo:{width:22, height:22, marginHorizontal:24},
    tabTravelButton:{paddingLeft:20, paddingRight:13,},
    travelLogo:{width:24, height:24, marginLeft:24},
    tabGroceryButton:{paddingLeft:20, paddingRight:13,},
    grocerryLogo:{width:24, height:24,marginLeft:30}
})