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

export default function EnterRoomPage ({enterRoom, createRoom}) {
	const [name, setName] = useState("");
	const [roomId, setRoomId] = useState("");

	const [showPrompt, setShowPrompt] = useState(false);
	const closePrompt = () => setShowPrompt(false);
	const openPrompt = () => setShowPrompt(true);

	const enter = () => enterRoom(roomId);

	return(
		<View style={styles.page}>
			<EnterRoomCode getName={openPrompt} setRoomId={setRoomId}/>
			<CreateNewRoom getName={openPrompt} setRoomId={setRoomId} createRoom={createRoom}/>
			{
				showPrompt ?
				<GetName setName={setName} closePrompt={closePrompt} enter={enter} /> : <></>
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