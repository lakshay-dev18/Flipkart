import{router} from 'expo-router'
import { StyleProp, TextInput, TextStyle, } from 'react-native'
import { useState } from 'react'

type Search ={
    style?: StyleProp<TextStyle>
}


export default function SearchField({style}:Search){
    const[search,setSearch] = useState('')
    const IphoneProduct = ['ip','iph','ipho','iphon','iphone']
    const SamsungProduct = ['sa','sam','sams','samsu','samsun','samsung']
    const searchResult = search.trim().toLowerCase()
  
    function HandleSearch(){
    if(IphoneProduct.includes(searchResult)){return(
        router.push({pathname:'/search/IphoneSearchScreen', params:{query : 'iphone'}})
    )}
    if(SamsungProduct.includes(searchResult)){return(
        router.push({pathname: '/search/IphoneSearchScreen', params:{query : 'samsung'}})
    )}
    }
    return(
        <TextInput style={style} placeholder='Enter Here...' value={search} onChangeText={setSearch} onSubmitEditing={HandleSearch} returnKeyType="search" />

    )
}