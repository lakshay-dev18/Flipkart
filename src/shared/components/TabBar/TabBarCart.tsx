import{Pressable , View, Text, StyleSheet} from 'react-native'
import { usePathname , router} from 'expo-router'

export const CartBar = () => {
    const pathname = usePathname();

    const tabs = [
        { name: 'Flipkart', path: '/(tabs)/cart',matchpath:'/cart' ,activeStyle: styles.activebutton, inactiveStyle: styles.button },
        { name: 'Grocery', path: '/(tabs)/home/grocery',matchpath:'/grocery' ,activeStyle: styles.activebutton, inactiveStyle: styles.button },
        { name: 'Categories', path: '/(tabs)/categories',matchpath:'categories' ,activeStyle: styles.categoryActiveButton, inactiveStyle: styles.categoryButton }
    ];

    return (
        <View style={styles.container}>
            {tabs.map((tab) => (
                <Pressable key={tab.path} onPress={() => router.push(tab.path)}>
                    <Text style={pathname === tab.matchpath ? tab.activeStyle : tab.inactiveStyle}>
                        {tab.name}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{marginTop:10, flexDirection:'row', marginHorizontal:20, gap:16},
    activebutton:{ backgroundColor:'#0941b2', fontWeight:'600', paddingHorizontal:22, paddingVertical:10, borderRadius:10, color:'white' },
    button:{ color:'black', fontWeight:600, paddingHorizontal:22, paddingVertical:10, borderRadius:10, borderWidth:1 },
    categoryButton:{ color:'black', fontWeight:600, paddingHorizontal:14, paddingVertical:10, borderRadius:10, borderWidth:1 },
    categoryActiveButton:{ backgroundColor:'#5079cd', color:'white', fontWeight:600, paddingHorizontal:14, paddingVertical:10, borderRadius:10 }
})