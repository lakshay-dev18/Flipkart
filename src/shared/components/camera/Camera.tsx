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
                <TouchableOpacity  onPress={() => router.back()}>
                    <Text style={styles.backButton}>Go Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    permissionContainer: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    overlayContainer: {
        paddingVertical: 50,
    },
    backButton: {
        padding: 12,
        borderRadius: 8,
        color:'white',

    },
});

export default CameraScreen;
