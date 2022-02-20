// to publish run expo publish
// to start run npm start or expo start
import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import * as Linking from "expo-linking"
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
	const [roomFromUrl, setRoomFromUrl] = useState(null);

	const goToRoomPage = () => setPage(1);
	const exitRoom = () => setPage(0);
	const isInRoomPage = () => page === 1;
	const handleDeepLink = (url) => {
		const data = Linking.parse(url)
		console.log(data)
		const queryParams = data.queryParams
		if (queryParams && queryParams.roomName) {
			exitRoom()
			if (isInRoomPage()) exitRoom()
			setRoomFromUrl(queryParams.roomName)
		}
	}
	const listenerUrlLinking = (event) => handleDeepLink(event.url);

	const pages = [
		<EnterRoomPage 
			goToRoomPage={goToRoomPage} 
			setInitialCount={setInitialCount} 
			setWebSocket={setWebSocket} 
			setRoomId={setRoomId} 
			roomId={roomId} 
			setRoomFromUrl={setRoomFromUrl} 
			roomFromUrl={roomFromUrl} 
			handleDeepLink={handleDeepLink}
		/>,
		<RoomPage 
			exitRoomPage={exitRoom} 
			webSocket={webSocket} 
			initialCount={initialCount} 
			roomId={roomId}
		/>
	]

	useEffect(() => {
		NetInfo.addEventListener( state => setConnected(state.isConnected))
	}, [])

	useEffect(() => {
		async function getInitialUrl(){
			const initialUrl = await Linking.getInitialURL()
			if (initialUrl) handleDeepLink(initialUrl)
		}

		if (!roomFromUrl) getInitialUrl();
		Linking.addEventListener('url', listenerUrlLinking)
		return () => Linking.removeEventListener('url');
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
});
