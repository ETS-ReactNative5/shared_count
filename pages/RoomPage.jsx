import { useEffect, useState } from 'react';
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
	shareRoom,
	setupSocket,
} from '../models';

export default function RoomPage ({exitRoomPage, webSocket, initialCount, roomId}) {
	const [counter, setCounter] = useState(initialCount);
	const [players, setPlayers] = useState([]);
	const exitAction = () => {
		console.log("disconnect from websocket")
		exitRoom(webSocket)
		exitRoomPage()
	}
	const count = () => {
		increaseCount(webSocket, count)
	}
	const share = () => {
		shareRoom(roomId);
	}

	useEffect(() => setupSocket(webSocket, setCounter, setPlayers), [roomId])
	useEffect(() => setCounter(initialCount), [initialCount])

	return(
		<View style={styles.page}>
			<ShowRoom roomCode={roomId}/>
			<Counter count={counter} />
			<CountButton increaseCount={count} />
			<PlayerList players={players}/>
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