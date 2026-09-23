import {Stack} from 'expo-router'

const BottomTab= ()=>{
    return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
    </Stack>
    )
}
export default BottomTab;    