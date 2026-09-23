import {View, StyleSheet, Image} from 'react-native'
import Colors from '../shared/themes/colors'
import{useState, useEffect} from 'react'
import { router } from 'expo-router'



export default function FlipkartSplashScreen(){
    const[showSplash, setShowSplash] = useState(true)

    useEffect(()=>{
        const Timer = setTimeout(()=>{
            setShowSplash(false)
            router.replace('/(tabs)/home')
        },2000)
        return()=>clearTimeout(Timer)
    },[])
    if(showSplash === true){
        return(
        <View style={styles.container}>
            <Image source={require('../../assets/flipkart.png')} style={styles.flipkartLogo}/>
        </View>
    )
    }
}
const styles= StyleSheet.create({
    container:{flex:1, backgroundColor:Colors.splashColor, justifyContent:'center', alignItems:"center"},
    flipkartLogo:{width:180,height:180}
})




