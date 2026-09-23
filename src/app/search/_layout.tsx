import { Stack } from "expo-router";

export default function ScreenLayout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="IphoneSearchScreen"></Stack.Screen>
        </Stack>
    )
}