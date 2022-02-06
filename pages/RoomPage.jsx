
import { useState } from 'react';
import { 
    StyleSheet,
	SafeAreaView,
	View,
	StatusBar,
} from 'react-native';

import {
	ShowRoom,
	Counter,
	CountButton,
	PlayerList,
	Menu,
} from "./components";

export default function RoomPage ({exitRoom}) {
	return(
		<View style={styles.page}>
			<ShowRoom roomCode="A1B2C3" />
			<Counter count={39} />
			<CountButton increaseCount={() => console.log("increasing count")} />
			<PlayerList />
			<Menu exitAction={exitRoom} shareAction={() => console.log("sharing")}/>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		height: "90%"
	}
});