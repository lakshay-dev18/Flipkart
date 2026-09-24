import{ Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const BottomTab= ()=>{
    return(
        // <Tabs screenOptions={{headerShown:false ,tabBarStyle:{
        //  paddingHorizontal:32, backgroundColor:Colors.linearHomeColor3, marginBottom:2
        // }}} >    
        <Tabs screenOptions={{headerShown:false ,tabBarStyle:{
         paddingHorizontal:32, marginBottom:10, width:'85%', borderRadius:20,  position:'absolute', marginLeft:28
        }}} >    
            <Tabs.Screen name='home'  
            options={{
                title:'Home',
                 tabBarIcon: ({  focused }) => (
                    <Ionicons name={focused? 'home' : 'home-outline'} size={24} />
          ),
            }
            }/>
            <Tabs.Screen name='play' 
            options={{
                title:'Play',
                 tabBarIcon: ({  focused }) => (
                    <Ionicons name={focused? 'play-circle' : 'play-circle-outline'} size={24} />
          ),
            }
            }/>
            <Tabs.Screen name='categories' 
            options={{
                title:'Categories',
                 tabBarIcon: ({  focused }) => (
                    <Ionicons name={focused? 'apps' : 'apps-outline'} size={24} />
          ),
            }
            }/>
            <Tabs.Screen name='account'  options={{
                title:'Account',
                 tabBarIcon: ({  focused }) => (
                    <Ionicons name={focused? 'person' : 'person-outline'} size={24} />
                ),
            }}/>
            <Tabs.Screen name='cart' 
            options={{
                title:'Cart',
                 tabBarIcon: ({  focused }) => (
                    <Ionicons name={focused? 'cart' : 'cart-outline'} size={24} />
          ),
            }
            }/>
            
        </Tabs>
    )
}
export default BottomTab;