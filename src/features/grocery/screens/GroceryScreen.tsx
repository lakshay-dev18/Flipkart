import { ActivityIndicator, View, Text,  ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import TabBar from '../../../shared/components/TabBar/TabBarHome'
import styles from '../../../../src/features/grocery/stylesheet/GroceryStyleSheet'
import {useCategories} from '../../home/home-data/HomeScreenApi'
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import Colors from '../../../shared/themes/colors';
import {GroceryScreenLayout,GroceryFooterLayout} from '../../../../src/features/grocery/components/GroceryLayout'
import CorouselScreen from '../../../shared/components/Corousel/Corousel'
import {FlatlistCategory, FlatlistGroceryContainer} from '../../../../src/features/grocery/components/FlatlistGrocery'

export default function GroceryScreen(){
  const { isLoading, isError , refetch} = useCategories('Get');
  
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
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
        <LinearGradient
            colors={[Colors.linearGroceryColor,Colors.linearGroceryColor2, Colors.linearGroceryColor3]}
            locations={[0.45,0.5,0.55]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.5 }}
            style={styles.gradient}
        >
            <SafeAreaView>
            <TabBar/>
            <GroceryScreenLayout/>    
            <CorouselScreen/>
            <FlatlistCategory/>
            <View>
                <GroceryFooterLayout/>
                <FlatlistGroceryContainer/>
            </View>

            </SafeAreaView>
            </LinearGradient>
        </ScrollView>
        </TouchableWithoutFeedback>
    )
}