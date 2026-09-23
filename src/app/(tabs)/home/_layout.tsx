import {Stack} from 'expo-router'

const BottomTab= ()=>{
    return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="grocery" />
    </Stack>
    )
}
export default BottomTab;    