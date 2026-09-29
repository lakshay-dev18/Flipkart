import{View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import{useState} from 'react'


export const WishlistButtons = () =>{
    const[active, setActive] = useState('collection')
    const wishlists = [
        {id:1, name:'My collections', activestyle: styles.activeCollection, inactivestyle: styles.inactiveCollection, press: ()=>setActive('collection'), activeset: 'collection'},
        {id:2, name:'Collections I follow', activestyle: styles.activeCollection, inactivestyle: styles.inactiveCollection, press: ()=>setActive('follow'), activeset: 'follow'},
    ]
    return(  
        <View style={styles.buttonContainer}>
            {wishlists.map((wishlist)=>(
              <View key={wishlist.id} >  
                <TouchableOpacity onPress={wishlist.press}>
                    <Text style={active === wishlist.activeset ? wishlist.activestyle : wishlist.inactivestyle}>{wishlist.name}</Text>
                    <View style={active === wishlist.activeset ? styles.underline : null}/>
                </TouchableOpacity>
              </View>  
            ))}
        </View>
    )
}    
const styles = StyleSheet.create({
    buttonContainer:{flexDirection:'row', justifyContent:'space-between'},
    activeCollection:{color:'blue', paddingLeft:40,paddingVertical:12, paddingRight:16},
    inactiveCollection:{ paddingLeft:40,paddingVertical:12, paddingRight:16},
    underline:{borderWidth:1, position:'absolute', width:180, top:52, left:0, borderColor:'blue'}
})