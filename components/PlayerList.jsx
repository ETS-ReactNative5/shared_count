import {
    StyleSheet,
    View,
    FlatList,
    ScrollView,
    Text,
} from "react-native"

import config from "../config";


function Player ({playerName}) {
    return (
        <View>
            <Text style={styles.player}>
                {playerName}
            </Text>
        </View>
    )
}

export default function PlayerList () {
    let players = [
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
        "John", "Josh", "João",
    ];
    players = players.map( (name, index) => ({id: index, name: name}))
    const renderItem = ({item}) => (
        <Player playerName={item.name} />
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Participants:
            </Text>
            <ScrollView style={styles.scroll} contentContainerStyle={{flexGrow:1}}>
                {
                    players.map( (player, index) => <Player key={index} playerName={player.name} />)
                }
            </ScrollView>
        </View>

    )
}

const colors = config.colors;
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginVertical: 30,
        backgroundColor: colors.gray,
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    scroll: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderTopWidth: 1,
        borderColor: colors.orange,
        height: 200,
    },
    player: {
        fontSize: 15,
        marginVertical: 10,
    }
})