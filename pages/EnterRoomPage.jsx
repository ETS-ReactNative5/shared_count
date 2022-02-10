import { useEffect, useState } from 'react';
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
	postName
} from "../models"

import config from '../config';

export default function EnterRoomPage ({goToRoomPage, setWebSocket, setRoomId, roomId}) {
	const [showPrompt, setShowPrompt] = useState(false);
	const closePrompt = () => setShowPrompt(false);
	const openPrompt = () => setShowPrompt(true);

	const createRoomId = () => createRoom(config.apiEndpoint, setRoomId)

	const enter = (userName) => {
		postName(roomId, userName)
		goToRoomPage();
		enterRoom(roomId, setWebSocket);
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