import { Pressable, Image, Text } from "react-native";
import styles from '../../../../src/features/home/stylesheet/HomeScreenStyles'
import{router} from 'expo-router'
import{CategoryItem} from '../../../../src/shared/components/interface/CategoryItemInterface'
import Colors from "../../../shared/themes/colors";

interface FlatlistProp{
    item: CategoryItem
}
export const FlatlistRender = ({item}:FlatlistProp) =>{
    return(
        <Pressable style={styles.bodyContainer} android_ripple={{color:Colors.rippleColor, foreground:true}} onPress={()=>router.push({pathname:'/screens/ProductScreen', params:{ query: 'iphone' }})}>
            <Image source={{ uri: item.image }} style={styles.bodyImage} />
            <Text style={styles.bodyName}>{item.name}</Text> 
        </Pressable>
    )
}

export const FlatlistRenderFooter = ({item}:FlatlistProp) =>{
    return(
        <Pressable style={styles.footerContainer} android_ripple={{color:Colors.rippleColor, foreground:true}} onPress={()=>router.push({pathname:'/screens/ProductScreen', params:{ query: 'samsung' }})}>
            <Image source={{ uri: item.image }} style={styles.footerImage} />
            <Text style={styles.footerName}>{item.name}</Text> 
        </Pressable>
    )
}