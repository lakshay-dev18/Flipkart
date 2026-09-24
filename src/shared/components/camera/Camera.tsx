import { TouchableOpacity, Text, View, StyleSheet, Button } from "react-native";
import { CameraView, useCameraPermissions } from 'expo-camera'; 
import { router } from 'expo-router';

const CameraScreen = () => {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <View style={styles.container} />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.permissionContainer}>
                <Text style={{ color: 'white', marginBottom: 20 }}>We need your permission to show the camera</Text>
                <Button title="Grant Permission" onPress={requestPermission} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView style={StyleSheet.absoluteFill} facing='back' />

            <View style={styles.overlayContainer}>
                <TouchableOpacity  onPress={() => router.back()} style={{position:'absolute', top:30, left:0}}>
                    <Text style={styles.backButton}>Go Back</Text>
                </TouchableOpacity>
            <View style={{gap:10, alignItems:'center', flexDirection:'row'}}>
                <TouchableOpacity>
                    <Text style={styles.captureButton}>Capture</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.resetButton}>Reset</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    permissionContainer: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    overlayContainer: {
        flex:1,
        paddingVertical: 50,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    backButton: {
        padding: 12,
        borderRadius: 8,
        color:'white',

    },
    captureButton:{
        color:'white',
        backgroundColor:'blue',
        fontSize:20,
        padding:6,
        borderRadius:10        
    },
    resetButton:{
        color:'white',
        backgroundColor:'blue',
        fontSize:20,
        padding:6,
        borderRadius:10
    }
});

export default CameraScreen;
