import { useState } from 'react';
import { 
    StyleSheet,
	View,
} from 'react-native';

import {
	ShowRoom,
	Counter,
	CountButton,
	PlayerList,
	Menu,
} from "../components";

import { 
	increaseCount,
	exitRoom,
	shareRoom
} from '../models';

export default function RoomPage ({exitRoomPage, webSocket, roomId}) {
	const [counter, setCounter] = useState(0);
	const exitAction = () => {
		console.log("disconnect from websocket")
		exitRoom(webSocket)
		exitRoomPage()
	}
	const count = () => {
		increaseCount(webSocket, setCounter)
	}
	const share = () => {
		shareRoom(roomId);
	}

	return(
		<View style={styles.page}>
			<ShowRoom roomCode={roomId}/>
			<Counter count={counter} />
			<CountButton increaseCount={count} />
			<PlayerList />
			<Menu 
				exitAction={exitAction}
				shareAction={share}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		height: "90%"
	}
});