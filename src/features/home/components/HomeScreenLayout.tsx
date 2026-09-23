import { House, Search, Camera, QrCode} from 'lucide-react-native';
import SearchField from '../../../../src/shared/components/search-function/SearchFunction'
import { View, Text, Image,  TouchableOpacity,} from 'react-native'
import styles from '../../../../src/features/home/stylesheet/HomeScreenStyles'
import { router } from 'expo-router';



export function HomeScreenLayout(){
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
                <TouchableOpacity  onPress={()=>router.push('/camera')}>
                    <Camera size={19} style={styles.cameraLogo}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.qrLogo} onPress={()=>router.push('/camera')}>
                    <QrCode  size={25}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}