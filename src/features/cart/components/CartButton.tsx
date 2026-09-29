import{Pressable , View, Text, StyleSheet} from 'react-native'
import {router} from 'expo-router'
import { useCart } from '../../../../src/shared/components/context/CartContext'

interface CartButtonProps {
    productId: string | number;
}

export const CartButton = ({ productId }: CartButtonProps) => {
    const { removeFromCart } = useCart();

    const tabs = [
        { name: 'Remove', style: styles.button },
        { name: 'Move to Wishlist', path: '/(tabs)/home/grocery',style: styles.button },
        { name: 'Buy Now', path: '/(tabs)/categories',style: styles.button}
    ];

    const handlePress = (tabName: string, path?: string) => {
        if (tabName === 'Remove') {
            removeFromCart(productId); 
        } else if (path) {
            router.push(path); 
        }
    };
    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <Pressable key={tab.name} onPress={() => handlePress(tab.name, tab.path)} >
                    <Text style={tab.style}>
                        {tab.name}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{flexDirection:'row',gap:25, marginLeft:12, marginTop:10},
    button:{paddingVertical:6, borderWidth:1,borderRadius:8, paddingHorizontal:10,fontWeight:500}
})
