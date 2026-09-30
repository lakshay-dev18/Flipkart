import { Stack } from 'expo-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { CartProvider } from '../shared/components/context/CartContext'

const queryClient = new QueryClient()


export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='index' />
                    <Stack.Screen name='(tabs)' />
                    <Stack.Screen name='(toptabs)' />
                    <Stack.Screen name='camera' />
                    <Stack.Screen name='help' />
                    <Stack.Screen name='address' />
                    <Stack.Screen name='wishlist' />
                </Stack>
            </CartProvider>
        </QueryClientProvider>
    )
}

