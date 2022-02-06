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

export default function EnterRoomPage ({enterRoom}) {
	const [name, setName] = useState("");
	const [showPrompt, setShowPrompt] = useState(false);
	const closePrompt = () => setShowPrompt(false);

	const enter = () => {
		setShowPrompt(true);
	}
	return(
		<View style={styles.page}>
			{
				showPrompt ?
				<GetName setName={setName} closePrompt={closePrompt}  enterRoom={enterRoom}/> : <></>
			}
			<EnterRoomCode enterRoom={enter}/>
			<CreateNewRoom enterRoom={enter}/>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		width: "100%",
		minHeight: "80%"
	},
});