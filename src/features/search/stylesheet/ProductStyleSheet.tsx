import{StyleSheet} from 'react-native'
import Colors from '../../../shared/themes/colors'

const styles = StyleSheet.create({
    container:{ flex:1 },
    topContainer:{flexDirection:'row',alignItems:'center', marginLeft:8, marginTop:53},
    searchInput:{borderWidth:1, width:275, height:38, marginLeft:11, borderRadius:10, marginRight:6, paddingLeft:34, },
    searchLogo:{position:'absolute', left:40, top:8},
    separatorLine:{ borderWidth:1},
    line:{borderWidth:1, marginTop:23, marginBottom:22},
    phoneImage:{width:123, height:125, resizeMode:'contain'},
    phoneContainer:{flexDirection:'row', paddingVertical:22, },
    rating:{width:80, height:15},
    fassured:{width:40, height:11, marginTop:4},
    phoneName:{fontSize:10, },
    decreasePrice:{fontSize:12, marginTop:4, color:Colors.decreasePriceColor},
    wowLogo:{width:22, height:22},
    price:{fontSize:16},
    bankText:{fontSize:10,color:Colors.labelText, marginTop:4},
    exchangeText:{fontSize:10, marginTop:2},
    truckLogo:{width:17,height:17},
    timeText:{fontSize:10, marginLeft:3, marginTop:2},
    warrantyText:{fontSize:10, marginTop:2},
    
})
export default styles;