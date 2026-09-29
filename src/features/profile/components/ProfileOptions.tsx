import{View, Text, StyleSheet, Pressable} from 'react-native'
import {User, ChevronRight, MapPinHouse, Languages, Bell, MonitorPlay, CircleQuestionMark,FileText} from 'lucide-react-native'
import {router} from 'expo-router'

export const ProfileOption = () => {
    const options = [
        {id:1, name:'Edit Profile', Icon: User, style: styles.button, IconChevron:ChevronRight, path:'/profile'},
        {id:2, name:'Saved addresses', Icon: MapPinHouse, style: styles.button, IconChevron:ChevronRight, path:'/address' },
        {id:3, name:'Change language', Icon: Languages, style: styles.button, IconChevron:ChevronRight, path:'/(tabs)/home'},
        {id:4, name:'Notification settings', Icon: Bell, style: styles.button, IconChevron:ChevronRight, path:'/(tabs)/home'},
        {id:5, name:'My subscriptions', Icon: MonitorPlay, style: styles.button, IconChevron:ChevronRight, path:'/(tabs)/home'}
    ]
    return(
        <View>
            {options.map((option)=>(
                <Pressable key={option.id} style={styles.buttonContainer} onPress={()=>router.push(option.path)}>
                    <View style={{flexDirection:'row'}}>
                    <View style={styles.iconContainer}>
                        <option.Icon size={20} color={'#177397'}/>
                    </View>
                    <Text style={option.style}>{option.name}</Text>
                    </View>
                    <option.IconChevron size={20} />
                </Pressable>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer:{flexDirection:'row', marginLeft:12, paddingHorizontal:4, paddingVertical:10,  alignItems:'center', justifyContent:'space-between'},
    button:{fontSize:14,marginLeft:10, textAlign:'center', alignSelf:'center'},
    iconContainer:{backgroundColor:'#bcc9cf', borderRadius:16, width:26, height:26, justifyContent:'center', alignItems:'center'}
})

export const TermsOption = () => {
    const options = [
        {id:1, name:'FAQs', Icon: CircleQuestionMark, style: Styles.button, IconChevron:ChevronRight},
        {id:2, name:'Terms, Policies & Licenses', Icon: FileText, style: Styles.button, IconChevron:ChevronRight },
    ]
    return(
        <View>
            {options.map((option)=>(
                <Pressable key={option.id} style={Styles.buttonContainer}>
                    <View style={{flexDirection:'row'}}>
                    <View style={Styles.iconContainer}>
                        <option.Icon size={20} color={'#177397'}/>
                    </View>
                    <Text style={option.style}>{option.name}</Text>
                    </View>
                    <option.IconChevron size={20} />
                </Pressable>
            ))}
        </View>
    )
}
const Styles = StyleSheet.create({
    buttonContainer:{flexDirection:'row', marginLeft:12, paddingHorizontal:4, paddingVertical:10,  alignItems:'center', justifyContent:'space-between'},
    button:{fontSize:14,marginLeft:10, textAlign:'center', alignSelf:'center'},
    iconContainer:{backgroundColor:'#bcc9cf', borderRadius:16, width:26, height:26, justifyContent:'center', alignItems:'center'}
})