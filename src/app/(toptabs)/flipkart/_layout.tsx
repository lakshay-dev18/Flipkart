import {Stack} from 'expo-router'

const TopTab= ()=>{
    return(
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
    </Stack>
    )
}
export default TopTab;    