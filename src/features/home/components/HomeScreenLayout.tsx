import { House, Search, Camera, QrCode} from 'lucide-react-native';
import { View, Text, Image,  TouchableOpacity, TextInput} from 'react-native'
import styles from '../../../../src/features/home/stylesheet/HomeScreenStyles'
import { router } from 'expo-router';



export const HomeScreenLayout=()=>{
    return(
        <View style={{flexDirection:'row'}}>
            <House fill='#000000' size={20} style={styles.houseLogo}/>
            <Text style={styles.addressText}>Home : 13 -22B Nagercoil,kanyakumari,Tamilnadu</Text>
            <Image source={require('../../../../assets/HomeScreenIcons/coinbg.png')} style={styles.coinbg}/>
            <Image source={require('../../../../assets/HomeScreenIcons/coin.png')} style={styles.coin}/>
            <Text style={styles.coinText}>16</Text>
        </View>
            
    )
}

export const SearchContainer =() =>{
    return(
        <View style={styles.inputContainer}>
            <Search style={styles.searchLogo} size={19}/>
            <TextInput style={styles.searchInput} placeholder='Enter Here...' showSoftInputOnFocus={false} onPress={()=>router.push({pathname:'/search', params:{query : 'iphone'}})}/>
            <TouchableOpacity  onPress={()=>router.push('/camera')}>
                <Camera size={19} style={styles.cameraLogo}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.qrLogo} onPress={()=>router.push('/camera')}>
                <QrCode  size={25}/>
            </TouchableOpacity>
        </View>
    )
}        