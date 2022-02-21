// import RNRestart from 'react-native-restart';
import {Restart} from 'fiction-expo-restart';

import {
    View, 
    Text,
    StyleSheet,
} from "react-native"

import {
    Button
} from "../components/elements";

import config from '../config';

export default function NotConnected () {
    const handleRestart = () => Restart();
    return (
        <View style={styles.container}> 
            <Text style={styles.title}>
                It seems like you're not connected to the internet...
            </Text>
            <Text style={styles.message}>
                Try checking your Wi-fi or mobile network connection!
            </Text>
            <Button 
                label="Restart app." 
                action={handleRestart}
                backgroundColor={config.colors.blue}
                textColor={config.colors.dark}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    message: {
        fontSize: 15,
        paddingVertical: 20
    },
    container: {
        padding: 30
    }
})