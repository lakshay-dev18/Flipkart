import {createMaterialTopTabNavigator} from 'expo-router/js-top-tabs'
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();
export const TopTab = withLayoutContext(Navigator);

const TopLayout = () => {
  return(
      <TopTab >
        <TopTab.Screen name='flipkart'/>
        <TopTab.Screen name='pay'/>
        <TopTab.Screen name='travel'/>
        <TopTab.Screen name='grocery'/>
      </TopTab>
  )
}
export default TopLayout;

