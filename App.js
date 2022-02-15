// to publish run expo publish
// to start run npm start or expo start

import { useState } from 'react';
import { 
    StyleSheet,
	SafeAreaView,
	View,
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
	const [initialCount, setInitialCount] = useState();

	const goToRoomPage = () => setPage(1);
	const exitRoom = () => setPage(0);

	const pages = [
		<EnterRoomPage goToRoomPage={goToRoomPage} setInitialCount={setInitialCount} setWebSocket={setWebSocket} setRoomId={setRoomId} roomId={roomId}/>,
		<RoomPage exitRoomPage={exitRoom} webSocket={webSocket} initialCount={initialCount} roomId={roomId}/>,
	]

  	return (
    	<SafeAreaView style={[styles.outside, styles.AndroidSafeArea]}>
			<View style={styles.container}>
				<TitleBar />
				{pages[page]}
	    	  	<StatusBar style="auto" />
			</View>
    	</SafeAreaView>
  	);
}

const colors = config.colors
const styles = StyleSheet.create({
	outside: {
    	backgroundColor: colors.light,
		minHeight: "100%",
	},
  	container: {
  	},
	AndroidSafeArea: {
	    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
});
