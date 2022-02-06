import { useState } from 'react';
import { 
    StyleSheet,
	SafeAreaView,
	View,
	StatusBar
} from 'react-native';

import {
	TitleBar,
	EnterRoomCode,
	CreateNewRoom,
	ShowRoom,
	Counter,
	CountButton,
	PlayerList,
	Menu,
} from "./components";


import config from './config';
function Page1 ({enterRoom}) {
	
	return(
		<View style={styles.page1}>
			<EnterRoomCode enterRoom={enterRoom}/>
			<CreateNewRoom enterRoom={enterRoom}/>
		</View>
	)
}

function Page2 ({exitRoom}) {
	return(
		<View style={styles.page2}>
			<ShowRoom roomCode="A1B2C3" />
			<Counter count={39} />
			<CountButton increaseCount={() => console.log("increasing count")} />
			<PlayerList />
			<Menu exitAction={exitRoom} shareAction={() => console.log("sharing")}/>
		</View>
	)
}

export default function App() {
	const [page, setPage] = useState(1);

	const enterRoom = (roomId) => {
		console.log(`entering room ${roomId}`)
		setPage(1)
	}

	const exitRoom = () => {
		console.log("Exiting room")
		setPage(0);
	}

	const pages = [
		<Page1 enterRoom={enterRoom}/>,
		<Page2 exitRoom={exitRoom}/>,
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
	page1: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-around",
		width: "100%",

	},
	page2: {
		height: "90%"
	}

});
