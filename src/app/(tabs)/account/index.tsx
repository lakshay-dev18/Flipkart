import{View,Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {MicSignal, Package, Heart} from 'lucide-react-native'
import {ProfileOption, TermsOption} from '../../../features/profile/components/ProfileOptions'
import {router} from 'expo-router'
import {CartList} from '../../../../src/shared/components/commonflatlistdata/CartFlatlist'
import {useCart} from '../../../../src/shared/components/context/CartContext'


export default function Account(){
      const { addToCart } = useCart()
    return(
        <ScrollView style={styles.container}>
          <SafeAreaView>
            <View style={styles.profileContainer}>
              <Text style={styles.profileName}>Hey, Lakshay</Text>
                <TouchableOpacity style={styles.helpButtonContainer}>
                  <MicSignal size={20}/>
                  <Text style={styles.helpButton}>Help</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',gap:20, marginLeft:12}}>
              <TouchableOpacity style={styles.rowButtons}>
                  <Package size={22} color={'blue'}/>
                  <Text>Orders</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rowButtons} onPress={()=>router.push('/wishlist')}>
                  <Heart size={22} color={'blue'}/>
                  <Text>Wishlist</Text>
              </TouchableOpacity>
            </View>
            <View >
              <Text style={styles.recentText}>Recently Viewed Stores</Text>
              <CartList setChangeData={addToCart}/>
            </View>
            <View>
              <Text style={styles.settingsText}>Profile Settings</Text>
              <ProfileOption/>
            </View>
            <View>
              <Text style={styles.termsText}>FAQ & Terms</Text>
              <TermsOption/>
            </View>
          </SafeAreaView>  
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{flex:1, marginBottom:80},
    profileName:{fontSize:18, fontWeight:500, },
    profileContainer:{flexDirection:'row',  justifyContent:'space-between',padding:12},
    helpButton:{fontSize:12},
    helpButtonContainer:{flexDirection:'row', borderWidth:1,padding:4, gap:4, borderRadius:8},
    rowButtons:{flexDirection:'row',borderWidth:1, paddingHorizontal:38, paddingVertical:16, borderRadius:8, gap:12},
    recentText:{fontSize:18, fontWeight:500, marginTop:20, marginLeft:12},
    settingsText:{fontSize:18, fontWeight:500, marginTop:14, marginLeft:12},
    termsText:{fontSize:18, fontWeight:500, marginLeft:12}
})
