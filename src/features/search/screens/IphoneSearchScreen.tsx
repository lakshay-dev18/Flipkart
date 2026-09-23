import{View,Text, FlatList, ActivityIndicator, Image, Pressable, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native'
import styles from '../stylesheet/IphoneStyleSheet'
import { MoveLeft , ShoppingCart, Search,} from 'lucide-react-native';
import{SafeAreaView} from 'react-native-safe-area-context'
import {useProducts} from '../api-data/IphoneData'
import {router, useFocusEffect, useLocalSearchParams} from 'expo-router'
import SearchField from '../../../../src/shared/components/search-function/SearchFunction'
import { useCallback } from 'react';


export default function IPhoneSearch(){
      const { data, isLoading, isError , refetch} = useProducts();
       const { query} = useLocalSearchParams() 

    useFocusEffect(
        useCallback(()=>{
            refetch()
        },[refetch])
    )  
    
    if (isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      }
    
    
      if (isError) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Error loading categories. Please try again.</Text>
          </View>
        );
      }
      const handleSearch = ()=> {
        if(query === 'iphone'){return data?.slice(0,8)}
        if(query === 'samsung'){return data?.slice(8,16)}
      }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <MoveLeft size={22} onPress={()=>router.back()}/>
                <Search size={18} style={styles.searchLogo}/>
                <SearchField style={styles.searchInput} />
                <TouchableOpacity onPress={()=>router.push('/(tabs)/cart')}>
                <ShoppingCart/>
                </TouchableOpacity>
            </View>
            <View style={styles.line}/>

            <FlatList
            data={handleSearch()}
            keyExtractor={(item)=>item.id.toString()}
            ItemSeparatorComponent={<View style={styles.separatorLine}/>}
            renderItem={({item})=>(
                <Pressable style={styles.phoneContainer} onPress={() => router.push({pathname:`/screens/${item.route}`,params:{query : item.product}})}>
                    <Image source={{ uri: item.phoneimage }} style={styles.phoneImage} />
                    <View>
                        <Text style={styles.phoneName}>{item.name}</Text>
                        <View style={{flexDirection:'row', marginTop:7, gap:2}}>
                            <Image source={{uri: item.rating}} style={styles.rating}/>
                            <Text>{item.personbuyed}</Text>
                            <Image source={{uri: item.fassured}} style={styles.fassured}/>
                        </View>
                        <View style={{flexDirection:'row', gap:6, marginTop:7}}>
                            <Text style={styles.decreasePrice}>{item.pricedecrease}</Text>
                            <Text style={styles.price}>{item.notthis}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                        <View style={{flexDirection:'row', gap:6}}>
                            <Image source={require('../../../../assets/iphoneScreen/wow.png')} style={styles.wowLogo}/>
                            <Text style={styles.bankText}>{item.bankoffer}</Text>
                        </View>
                        <Text style={styles.exchangeText}>{item.exchange}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../../../../assets/iphoneScreen/truck.png')} style={styles.truckLogo}/>
                            <Text style={styles.timeText}>{item.time}</Text>
                        </View>
                        <Text style={styles.warrantyText}>{item.warranty}</Text>
                    </View>
                </Pressable>
            )}
            />
        </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
