import {View,Image} from 'react-native'
import { Host, HorizontalMultiBrowseCarousel } from '@expo/ui/jetpack-compose';
import {useCategories} from '../../../features/home/home-data/HomeScreenApi'
import styles from '../../../features/home/stylesheet/HomeScreenStyles'



export default function CorouselScreen(){
      const { data} = useCategories('Get');
    return(
        <View>
                <Host matchContents={{ vertical: true }} style={styles.corouselContainer}>
                  <HorizontalMultiBrowseCarousel preferredItemWidth={230} itemSpacing={8}  >
                    {data?.map((item)=>(
                        <View key={item.id}>
                            <Image source={{ uri: item.image }} style={styles.corouselImage} />
                        </View>
                    ))}    
                  </HorizontalMultiBrowseCarousel>
                </Host>

            </View>
    )
}
