import { StyleSheet } from "react-native";
import Colors from '../../../../src/shared/themes/colors'

const styles=StyleSheet.create({
    container:{flex:1,backgroundColor: Colors.backgroundColor},
    gradient:{flex:1},
    houseLogo:{marginLeft:20, marginTop:9},
    addressText:{marginTop:12, fontSize:12, marginLeft:4},
    coinbg:{width:38, height:20, marginTop:10, marginLeft:4, resizeMode:'contain'},
    coin:{width:14, height:14,position:'absolute', right:28, top:13},
    coinText:{fontSize:10, position:'absolute',right:16, top:13},
    inputContainer:{flexDirection:'row',  marginLeft:15, marginTop:14, marginRight:24,},
    searchLogo:{alignSelf:'center',position:'absolute', zIndex:1 , marginLeft:9},
    searchInput:{backgroundColor:Colors.backgroundColor, borderWidth:1, height:38, width:280, borderRadius:10, paddingLeft:40, fontSize:11 },
    cameraLogo:{position:'absolute', right:18, top:10},
    qrLogo:{alignSelf:'center', marginLeft:7,},
    categoryImage:{resizeMode:'cover',overflow:'hidden',borderRadius:10,width:320, height:180,},
    imageContainer:{ marginHorizontal:17 , marginTop:9 },
    bodyContainer:{marginTop:28,marginLeft:15, },
    columnWrapper:{gap:4},
    bodyImage:{ height:67 , width:77, aspectRatio:1,flex: 1, borderRadius: 8, backgroundColor: Colors.imagebackgroundColor, overflow: 'visible', elevation: 5, shadowColor: Colors.shadowColor, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 4,},
    bodyName:{alignSelf:'center', paddingTop:5},
    FooterText:{ fontFamily: 'Inter', fontWeight: 500, fontSize: 16, letterSpacing: 0, marginTop:9, marginLeft:12 },
    footerContainer:{marginTop:28, marginLeft:17,overflow:'hidden', },
    bottomContainer:{marginTop:28, marginLeft:17,overflow:'hidden', marginBottom:80 },
    footerImage:{ height:67 , width:77, aspectRatio:1,flex: 1, borderRadius: 8, backgroundColor: Colors.imagebackgroundColor, overflow: 'visible', elevation: 5, shadowColor: Colors.shadowColor, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 4,},
    footerName:{alignSelf:'center'},
    offerIcon:{height:180, width:320, marginTop:17, marginLeft:13,},
    corouselContainer:{marginTop:9, marginHorizontal:17,},
    corouselImage:{height:180, resizeMode:'contain',borderRadius:10, overflow:'hidden'},
})
export default styles;