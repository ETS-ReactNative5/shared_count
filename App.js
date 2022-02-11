// to publish run expo publish
// to start run npm start or expo start

import { useState } from 'react';
import { 
    StyleSheet,
	SafeAreaView,
	StatusBar,
} from 'react-native';

import {
	TitleBar,
} from "./components";

import {
	RoomPage,
	EnterRoomPage
} from "./pages"

import config from './config';

export default function App() {
	// shadows not working on ios
	const [page, setPage] = useState(0);
	const [webSocket, setWebSocket] = useState();
	const [roomId, setRoomId] = useState("");

	const goToRoomPage = () => setPage(1);
	const exitRoom = () => setPage(0);

	const pages = [
		<EnterRoomPage goToRoomPage={goToRoomPage} setWebSocket={setWebSocket} setRoomId={setRoomId} roomId={roomId}/>,
		<RoomPage exitRoomPage={exitRoom} webSocket={webSocket} roomId={roomId}/>,
	]

  	return (
    	<SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
			<TitleBar />
			{pages[page]}
    	  	<StatusBar style="auto" />
    	</SafeAreaView>
  	);
}

const colors = config.colors
const styles = StyleSheet.create({
  	container: {
    	backgroundColor: colors.light,
		minHeight: "100%"
  	},
	AndroidSafeArea: {
	    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
});
