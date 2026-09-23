import { House, Search, Camera, QrCode} from 'lucide-react-native';
import SearchField from '../../../../src/shared/components/search-function/SearchFunction'
import{View, Text, Image} from 'react-native'
import styles from '../../../../src/features/grocery/stylesheet/GroceryStyleSheet'
import { Ionicons } from '@expo/vector-icons';



export function GroceryScreenLayout(){
    return(
        <View>
            <View style={{flexDirection:'row'}}>
                <House fill='#000000' size={20} style={styles.houseLogo}/>
                <Text style={styles.addressText}>Home : 13 -22B Nagercoil,kanyakumari,Tamilnadu</Text>
                <Image source={require('../../../../assets/HomeScreenIcons/coinbg.png')} style={styles.coinbg}/>
                <Image source={require('../../../../assets/HomeScreenIcons/coin.png')} style={styles.coin}/>
                <Text style={styles.coinText}>16</Text>

            </View>
            <View style={styles.inputContainer}>
                <Search style={styles.searchLogo} size={19}/>
                <SearchField style={styles.searchInput} />
                <Camera size={19} style={styles.cameraLogo}/>
                <QrCode style={styles.qrLogo} size={25}/>
            </View>
        </View>    
    )        
}            


export function GroceryFooterLayout(){
    return(
        <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.FooterText}>Top Picks For You</Text>
                    <Ionicons name='arrow-forward-circle' size={30} style={styles.forwardLogo}/>
                </View>
                <Text style={styles.FooterBasedText}>Based on what is popular around you</Text>
        </View>        
    )
}