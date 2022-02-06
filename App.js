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
	const [page, setPage] = useState(0);

	const enterRoom = (roomId) => {
		console.log(`entering room ${roomId}`)
		setPage(1)
	}

	const exitRoom = () => {
		console.log("Exiting room")
		setPage(0);
	}

	const pages = [
		<EnterRoomPage enterRoom={enterRoom}/>,
		<RoomPage exitRoom={exitRoom}/>,

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
