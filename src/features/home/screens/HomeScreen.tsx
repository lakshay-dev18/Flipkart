import { ActivityIndicator, View, Text,  FlatList, Pressable,Image} from 'react-native'
import {router} from 'expo-router'
import {SafeAreaView} from 'react-native-safe-area-context'
import TabBar from '../../../shared/components/TabBar/TabBarHome'
import styles from '../../../../src/features/home/stylesheet/HomeScreenStyles'
import {useCategories} from '../home-data/HomeScreenApi'
import {useCallback} from 'react'
import { useFocusEffect } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../../shared/themes/colors';
import {HomeScreenLayout} from '../../../../src/features/home/components/HomeScreenLayout'
import {FlatlistBodyLayout,} from '../../../../src/features/home/components/FlatlistLayoutHome'
import CorouselScreen from '../../../shared/components/Corousel/Corousel'
import {CategoryItem} from '../../../../src/shared/components/interface/CategoryItemInterface'

// type ListRow = { type: 'corousel' } | (CategoryItem & { type?: undefined });

export default function HomeScreen(){
  const { data,isLoading, isError , refetch} = useCategories('Get');

  useFocusEffect(
        useCallback(()=>{
            refetch()
        },[refetch])
    )


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
      // const listData: ListRow[] = [ { type: 'corousel' }, ...(data?.slice(0, 8) ?? []) ];
    return(
        <View style={styles.container} >
                <FlatList
                data={data?.slice(0,8)}
                keyExtractor={(item) => item.id.toString()}
                // keyExtractor={(item, index) => item.type === 'corousel' ? 'corousel': item.id.toString()}
                numColumns={4}
                columnWrapperStyle={styles.columnWrapper}
                renderItem={({ item }) => {
                  // if(item.type === 'corousel'){return <TabBar/>}
                    return (
                    <Pressable style={styles.bodyContainer} onPress={()=>router.push('/screens')}>
                        <Image source={{ uri: item.image }} style={styles.bodyImage} />
                        <Text style={styles.bodyName}>{item.name}</Text> 
                    </Pressable>
                )    
                }}
                ListHeaderComponent={
                    <View>
                      <LinearGradient
                        colors={[Colors.linearHomeColor,Colors.linearHomeColor2, Colors.linearHomeColor3]}
                        locations={[0,0.5,3]}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.6, y: 0.9 }}
                        style={styles.gradient}
                      >
                      <SafeAreaView>
                      <TabBar/>
                      <HomeScreenLayout/>
                      <CorouselScreen/>
                      </SafeAreaView>
                      </LinearGradient>
                    </View>
                }
                stickyHeaderIndices={[0]}
                ListFooterComponent={
                <View>
                <Text style={styles.FooterText}>Rahul, is still looking for these..</Text>
                <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }: { item: CategoryItem }) => {
                return(
                    <Pressable style={styles.footerContainer} onPress={()=>router.push('/screens/SamsungScreen')}>
                        <Image source={{ uri: item.image }} style={styles.footerImage} />
                        <Text style={styles.footerName}>{item.name}</Text> 
                    </Pressable>
                ) 
                }}
                />
                <FlatlistBodyLayout/>
            </View>
                }
                />
        </View>
    )
}