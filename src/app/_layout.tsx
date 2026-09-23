import {Stack} from 'expo-router'
import { QueryClientProvider , QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function RootLayout(){
        return(
            <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{headerShown:false}}>
                <Stack.Screen name='index' />
                <Stack.Screen name='(tabs)' />
                <Stack.Screen name='(toptabs)' />
                <Stack.Screen name='camera' />
            </Stack>
            </QueryClientProvider>
        )
}

