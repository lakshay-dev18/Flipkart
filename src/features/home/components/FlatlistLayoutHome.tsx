import {View,Text, FlatList, Image, Pressable} from 'react-native'
import {useCategories} from '../home-data/HomeScreenApi'
import styles from '../../../../src/features/home/stylesheet/HomeScreenStyles'
import {CategoryItem} from '../../../../src/shared/components/interface/CategoryItemInterface'
import { router } from 'expo-router';
import CorouselScreen from '../../../shared/components/Corousel/Corousel'
import Colors from '../../../shared/themes/colors';


export const FlatlistBodyLayout=()=>{
    const {data} = useCategories('Get');
    return(
        <View>
                <FlatList
                data={data?.slice(0,8)}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
                numColumns={4}
                columnWrapperStyle={styles.columnWrapper}
                renderItem={({ item }: { item: CategoryItem }) => {
                    return (
                    <Pressable style={styles.bodyContainer} android_ripple={{color:Colors.rippleColor, foreground:true}} onPress={()=>router.push({pathname:'/screens/ProductScreen', params:{ query: 'iphone' }})}>
                        <Image source={{ uri: item.image }} style={styles.bodyImage} />
                        <Text style={styles.bodyName}>{item.name}</Text> 
                    </Pressable>
                )    
                }}
                ListHeaderComponent={
                    <View>
                        <CorouselScreen/>
                    </View>
                }
                ListFooterComponent={
                    <View>
                <Text style={styles.FooterText}>Rahul, is still looking for these..</Text>
                <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }: { item: CategoryItem }) => {
                return(
                    <Pressable style={styles.bottomContainer} android_ripple={{color:Colors.rippleColor, foreground:true}} onPress={()=>router.push({pathname:'/screens/ProductScreen', params:{ query: 'samsung' }})}>
                        <Image source={{ uri: item.image }} style={styles.footerImage} />
                        <Text style={styles.footerName}>{item.name}</Text> 
                    </Pressable>
                ) 
                }}
                />
            </View>
                }
                />
            </View>
    )
}
