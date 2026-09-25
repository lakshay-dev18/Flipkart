import { ActivityIndicator, View, Text, FlatList} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import TabBar from '../../../shared/components/TabBar/TabBarHome'
import styles from '../../../../src/features/grocery/stylesheet/GroceryStyleSheet'
import {useCategories} from '../../home/home-data/HomeScreenApi'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../../shared/themes/colors';
import {GroceryScreenLayout, SearchContainer} from '../../../../src/features/grocery/components/GroceryLayout'
import CorouselScreen from '../../../shared/components/Corousel/Corousel'
import {FlatlistCategory, FlatlistGroceryContainer,} from '../../../../src/features/grocery/components/FlatlistGrocery'

export default function GroceryScreen(){
  const {data, isLoading, isError } = useCategories('Get');

if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  if (isError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error loading categories. Please try again.</Text>
      </View>
    );
  }
  const listData = [
  { type: 'search' },
  { type: 'corousel' },
  { type: 'grid', items: data?.slice(8,16) },
];
  return(
    <View style={styles.container} >
    <LinearGradient
      colors={[Colors.linearGroceryColor,Colors.linearGroceryColor2, Colors.linearGroceryColor3]}
      locations={[0,0.5,3]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 0, y: 0.5 }}
      style={styles.gradient}
    >
    <SafeAreaView>
      <FlatList
      data={listData}
      keyExtractor={(item) => item.type}
      renderItem={({ item }) => {
        if (item.type === 'search') return <SearchContainer/>;
        if (item.type === 'corousel') return <CorouselScreen/>;
        return (
          <FlatList
          data={item.items}
          numColumns={4}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => <FlatlistCategory item={item}/>}
          scrollEnabled={false}
          />
        );
       }}
      stickyHeaderIndices={[1]}
      ListHeaderComponent={
        <View>
          <TabBar/>
          <GroceryScreenLayout/>
        </View>
      }
      ListFooterComponent={
      <View>
        <Text style={styles.FooterText}>Rahul, is still looking for these..</Text>
        <FlatlistGroceryContainer/>
        <View style={styles.bottom}/>
      </View>
      }
      />
      </SafeAreaView>
      </LinearGradient>
      </View>
    )
}