import{View,Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import {styles} from '../../../../src/features/profile/styles/ProfileStyleSheet'
import {SafeAreaView} from 'react-native-safe-area-context'
import {ArrowLeft, Search, ShoppingCart} from 'lucide-react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

export const ProfileScreen = () => {
    const[image, setImage] = useState<string | null>(null)
    
    const handleSearch = () => {
        alert('Your Response has been Submitted')
    }

    const pickImage = async () => {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permission.granted === false) {
            alert("Permission denied! We need gallery access to update your photo.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true, 
            // aspect:,    
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return(
        <ScrollView>
            <SafeAreaView>
                <View style={styles.headerButtonContainer}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:12, marginTop:20}}>
                        <TouchableOpacity onPress={()=>router.back()}>
                            <ArrowLeft size={20} color={'white'}/>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row', gap:20, marginRight:22}}>
                            <TouchableOpacity onPress={()=>router.push('/search')}>
                                <Search size={20} color={'white'}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>router.push('/(tabs)/cart')}>
                                <ShoppingCart size={20} color={'white'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.profileLogoContainer}>
                        <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
                            <Image 
                                source={
                                    image 
                                        ? { uri: image } 
                                        : require('../../../../assets/ProfileScreenLogo/profileLogo.png')
                                } 
                                style={styles.profileLogo}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View  style={{gap:10,flex:1}}>
                    <View style={styles.nameContainer}>
                        <Text>First Name</Text>
                        <TextInput placeholder='Enter your First Name...'/>
                        <View style={styles.underline}/>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text>Last Name</Text>
                        <TextInput placeholder='Enter your Last Name...'/>
                        <View style={styles.underline}/>
                    </View>
                    <TouchableOpacity onPress={handleSearch}>
                        <Text style={styles.submitButton}>SUBMIT</Text>
                    </TouchableOpacity>
                    <View style={styles.nameContainer}>
                        <Text>Mobile Number</Text>
                        <View style={styles.bottomContainer}>
                            <TextInput placeholder='Enter your Mobile Number...'/>
                            <TouchableOpacity>
                                <Text style={styles.updateButton}>Update</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.underline}/>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text>Email ID</Text>
                        <View style={styles.bottomContainer}>
                            <TextInput placeholder='Enter your Email Id...'/>
                            <TouchableOpacity>
                                <Text style={styles.updateButton}>Update</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.underline}/>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}