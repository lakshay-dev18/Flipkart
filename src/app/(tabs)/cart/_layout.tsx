import {Stack} from 'expo-router'

const BottomTab= ()=>{
    return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" options={{title:'Shopping Cart'}}/>
    </Stack>
    )
}
export default BottomTab;    