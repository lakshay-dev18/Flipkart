// // import  { useState } from 'react';
// // import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
// // import { TabView, SceneMap } from 'react-native-tab-view';
// // import HomeScreen from '../../../../src/features/home/screens/HomeScreen'

// // // Step 1: Define the components/views for your individual tabs
// // const FirstRoute = () => (
// //   <View style={[styles.scene, { backgroundColor: '#ff4081' }]}>
// //     <HomeScreen/>
// //   </View>
// // );

// // const SecondRoute = () => (
// //   <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
// //     <Text style={styles.text}>This is the Second Tab 🚀</Text>
// //   </View>
// // );
// // const ThirdRoute = () => (
// //   <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
// //     <Text style={styles.text}>This is the Second Tab 🚀</Text>
// //   </View>
// // );
// // const FourthRoute = () => (
// //   <View style={[styles.scene, { backgroundColor: '#673ab7' }]}>
// //     <Text style={styles.text}>This is the Second Tab 🚀</Text>
// //   </View>
// // );

// // // Step 2: Map your route keys to the specific components
// // const renderScene = SceneMap({
// //   first: FirstRoute,
// //   second: SecondRoute,
// //   third: ThirdRoute,
// //   fourth: FourthRoute,
// // });

// // export default function TabBarHome() {

// //   // Step 3: Set up state for the current active tab index
// //   const [index, setIndex] = useState(0);

// //   // Step 4: Define your tab routes (keys must match SceneMap above)
// //   const [routes] = useState([
// //     { key: 'first', title: 'Flipkart' },
// //     { key: 'second', title: 'Pay' },
// //     { key: 'third', title: 'Travel' },
// //     { key: 'fourth', title: 'Grocery' },
// //   ]);

// //   return (
// //     <TabView
// //       navigationState={{ index, routes }}
// //       renderScene={renderScene}
// //       onIndexChange={setIndex}
// //     //   initialLayout={{ width: layout.width }}
// //     />
// //   );
// // }

// // const styles = StyleSheet.create({
// //   scene: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   text: {
// //     color: '#fff',
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// // });


// import * as React from 'react';
// import { View, useWindowDimensions ,Text} from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import HomeScreen from '../../../../src/features/home/screens/HomeScreen'



// const FirstRoute = () => (
//   <View>
//     <HomeScreen/>
//   </View>
// );

// const SecondRoute = () => (
//   <View>
//     <Text>This is the Second Tab 🚀</Text>
//   </View>
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// const routes = [
//   { key: 'first', title: 'First' },
//   { key: 'second', title: 'Second' },
// ];

// export default function App() {
//   const layout = useWindowDimensions();
//   const [index, setIndex] = React.useState(0);

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//     />
//   );
// }