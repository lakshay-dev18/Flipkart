import{View, FlatList, Image, Text} from 'react-native'
import {useCategories} from '../../home/home-data/HomeScreenApi'
import {CategoryItem} from '../../../../src/shared/components/interface/CategoryItemInterface'
import styles from '../../../../src/features/grocery/stylesheet/GroceryStyleSheet'

interface CategoryProp{
    item: CategoryItem
}
      
export const FlatlistCategory = ({item}:CategoryProp)=>{
    return(
    <View style={styles.bodyContainer}>
        <Image source={{ uri: item.image }} style={styles.bodyImage} />
        <Text style={styles.bodyName}>{item.name}</Text> 
    </View>
    )
}            

export const FlatlistGroceryContainer = ()=>{
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


