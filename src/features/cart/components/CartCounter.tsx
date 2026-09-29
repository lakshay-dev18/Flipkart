import{View, Text,  TouchableOpacity, } from 'react-native'
import{useState } from 'react'

export const Counter = () => {
    const[counter, setCounter] = useState(1)
    return(
        <View style={{flex:1,flexDirection:'row', gap:20,  alignItems:'center', width:'27.5%', paddingLeft:10, borderBottomLeftRadius:8, borderBottomRightRadius:8, backgroundColor:'white',}}>
            <TouchableOpacity onPress={()=>setCounter(counter-1)}>
                <Text style={{fontSize:24, paddingLeft:3,}}>-</Text>
            </TouchableOpacity>
            <Text>
                <Text style={{fontSize:26}}>{counter}</Text>
            </Text>
            <TouchableOpacity onPress={()=>setCounter(counter+1)}>
                <Text style={{fontSize:24}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}