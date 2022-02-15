import { useState } from 'react';
import { 
	View,
    StyleSheet
} from 'react-native';

import {
	EnterRoomCode,
	CreateNewRoom,
	GetName,
} from "../components";

import {
	createRoom,
	enterRoom,
} from "../models"

import config from '../config';

export default function EnterRoomPage ({goToRoomPage, setInitialCount, setWebSocket, setRoomId, roomId}) {
	const [showPrompt, setShowPrompt] = useState(false);
	const closePrompt = () => setShowPrompt(false);
	const openPrompt = () => setShowPrompt(true);

	const createRoomId = () => createRoom(config.apiEndpoint, setRoomId, setInitialCount)

	const enter = (userName) => {
		goToRoomPage();
		enterRoom(config.webSocketEndpoint, config.apiEndpoint, roomId, userName, setWebSocket, setInitialCount);
	}

	return(
		<View style={styles.page}>
			<EnterRoomCode getName={openPrompt} setRoomId={setRoomId}/>
			<CreateNewRoom getName={openPrompt} createRoom={createRoomId}/>
			{
				showPrompt ?
				<GetName closePrompt={closePrompt} enter={enter} /> : <></>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		width: "100%",
		minHeight: "80%"
	},
});