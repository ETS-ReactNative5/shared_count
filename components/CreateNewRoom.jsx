import {
    View,
    StyleSheet,
} from "react-native";

import { Button } from "./elements";
import config from "../config";

export default function CreateNewRoom ({getName, setRoomId, createRoom}) {
    const colors = config.colors;
    const handleCreateNewRoom = () => {
        setRoomId(
            createRoom()
        )
        getName();
    };
    return (
        <View style={styles.container}>
            <Button 
                label="Create new room"
                action={handleCreateNewRoom}
                backgroundColor={colors.orange}
                textColor={colors.dark}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 100,
        paddingHorizontal: 20,
        width: "100%"
    },
})