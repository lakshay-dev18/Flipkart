import{StyleSheet} from 'react-native'
import Colors from '../../../shared/themes/colors'

export const styles = StyleSheet.create({
    headerButtonContainer:{ flex:1,backgroundColor:Colors.profilebutton, height:"60%"},
    profileLogoContainer:{ alignItems:'center', marginTop:140},
    profileLogo:{width:60, height:60, borderRadius:28, marginBottom:60}, 
    nameContainer:{marginLeft:12, marginTop:12},
    underline:{borderWidth:1, borderColor:Colors.rippleColor, width:324},
    submitButton:{color:Colors.profilebutton, fontWeight:500, textAlign:'center', marginTop:28},
    bottomContainer:{flexDirection:'row', justifyContent:'space-between', marginRight:16, alignItems:'center'},
    updateButton:{color:Colors.profilebutton}
})