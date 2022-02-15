import { useState } from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Alert
} from "react-native";



import config from "../config";

function Button ({icon, action, main=false}) {
    return (
        <TouchableOpacity
            style={[styles.button, !main ? styles.blue : {}]}
            onPress={action}
        >
            {icon}
        </TouchableOpacity>
    )
}


export default function Menu({exitAction, shareAction}) {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => setOpenMenu(!openMenu)
    const exit = () => {
        Alert.alert(
            "Exiting room.",
            "Are you sure you want to exit the room you're in?",
            [
                {
                    text: "Cancel",
                    onPress: () => {}
                },
                {
                    text: "Ok",
                    onPress: () => {
                        setOpenMenu(false);
                        exitAction();
                    }
                }
            ]
        )
    }
    
    const share = () => {
        setOpenMenu(false);
        shareAction();
    }

    return ( 
        <View style={styles.container} >
            {
                openMenu ?
                <Button 
                    icon={
                        <Image 
                            source={require("../assets/icons/005-share.png" )}
                            style={styles.icon}
                        />
                    }
                    action={share}
                />:<></>
            }
            {
                openMenu ?
                <Button 
                    icon={
                        <Image 
                            source={require("../assets/icons/003-exit.png" )}
                            style={styles.icon}
                        />
                    }
                    action={exit}
                />:<></>
            }
            <Button 
                icon={
                    <Image 
                        source={
                            openMenu ?
                            require("../assets/icons/close.png") :
                            require("../assets/icons/002-dots.png" )
                        }
                        style={styles.icon}
                    />
                }
                action={toggleMenu}
                main
            />
        </View>
    )
}

const colors = config.colors
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 50,
        right: 50,
    },
    button: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: colors.orange,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        elevation: 5,
        shadowOffset: {
            height: 5,
            width: 5,
        },
        shadowOpacity: 0.3,
        shadowColor: "black"
    },
    icon: {
        height: 25,
        width: 25,
        resizeMode: "contain"
    },
    blue: {
        backgroundColor: colors.blue
    }
})