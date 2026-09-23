import{View, FlatList, Image, Text} from 'react-native'
import {useCategories} from '../../home/home-data/HomeScreenApi'
import {CategoryItem} from '../../../../src/shared/components/interface/CategoryItemInterface'
import styles from '../../../../src/features/grocery/stylesheet/GroceryStyleSheet'



export function FlatlistCategory(){
  const { data} = useCategories('Get');
    return(
        <View>
            <FlatList
            data={data?.slice(0,8)} 
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            columnWrapperStyle={styles.columnWrapper}
            numColumns={4}
            renderItem={({ item }: { item: CategoryItem }) => {
                return (
                <View style={styles.bodyContainer}>
                    <Image source={{ uri: item.image }} style={styles.bodyImage} />
                    <Text style={styles.bodyName}>{item.name}</Text> 
                </View>
            )    
            }}
            />
            </View>
    )
}            

export function FlatlistGroceryContainer(){
  const { data} = useCategories('Get');
    return(
        <FlatList
        data={data}
        numColumns={3}
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: CategoryItem }) => {
        return(
            <View style={styles.groceryContainer}>
                <Image source={{ uri: item.image }} style={styles.groceryImage} />
                <Text style={styles.groceryName}>{item.name}</Text> 
            </View>
        ) 
        }}
        />
    )
}            