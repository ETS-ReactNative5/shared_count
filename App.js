// to publish run expo publish
// to start run npm start or expo start

import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
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
	EnterRoomPage,
	NotConnected
} from "./pages"

import config from './config';

export default function App() {
	const [page, setPage] = useState(0);
	const [webSocket, setWebSocket] = useState();
	const [roomId, setRoomId] = useState("");
	const [initialCount, setInitialCount] = useState();
	const [connected, setConnected] = useState(true);

	const goToRoomPage = () => setPage(1);
	const exitRoom = () => setPage(0);

	const pages = [
		<EnterRoomPage goToRoomPage={goToRoomPage} setInitialCount={setInitialCount} setWebSocket={setWebSocket} setRoomId={setRoomId} roomId={roomId}/>,
		<RoomPage exitRoomPage={exitRoom} webSocket={webSocket} initialCount={initialCount} roomId={roomId}/>,
	]

	useEffect(() => {
		NetInfo.addEventListener( state => {
			setConnected(state.isConnected)
		})
	}, [])

  	return (
    	<SafeAreaView style={[styles.outside, styles.AndroidSafeArea]}>
			<View style={styles.container}>
				<TitleBar />
				{
					!connected ?
					<NotConnected/> :
					pages[page]
				}
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
