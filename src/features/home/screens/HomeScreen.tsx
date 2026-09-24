import { ActivityIndicator, View, Text,  FlatList,} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import TabBar from '../../../shared/components/TabBar/TabBarHome'
import styles from '../../../../src/features/home/stylesheet/HomeScreenStyles'
import {useCategories} from '../home-data/HomeScreenApi'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../../shared/themes/colors';
import {HomeScreenLayout, SearchContainer} from '../../../../src/features/home/components/HomeScreenLayout'
import {FlatlistBodyLayout,} from '../../../../src/features/home/components/FlatlistLayoutHome'
import CorouselScreen from '../../../shared/components/Corousel/Corousel'
import {CategoryItem} from '../../../../src/shared/components/interface/CategoryItemInterface'
import {FlatlistRender, FlatlistRenderFooter} from '../../../../src/features/home/components/FlatlistRenderHome'


const HomeScreen = () =>{
  const { data,isLoading, isError } = useCategories('Get');

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
  { type: 'grid', items: data?.slice(0,8) },
];
  return(
    <View style={styles.container} >
    <LinearGradient
      colors={[Colors.linearHomeColor,Colors.linearHomeColor2, Colors.linearHomeColor3]}
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
          renderItem={({ item }) => <FlatlistRender item={item}/>}
          scrollEnabled={false}
          />
        );
       }}
      stickyHeaderIndices={[1]}
      ListHeaderComponent={
        <View>
          <TabBar/>
          <HomeScreenLayout/>
        </View>
      }
      ListFooterComponent={
      <View>
        <Text style={styles.FooterText}>Rahul, is still looking for these..</Text>
        <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: CategoryItem }) => {
          return( <FlatlistRenderFooter item={item}/> ) 
        }}
      />
      <FlatlistBodyLayout/>
      </View>
      }
      />
      </SafeAreaView>
      </LinearGradient>
      </View>
    )
}
export default HomeScreen;