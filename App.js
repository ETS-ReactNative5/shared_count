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
	CountButton
} from "./components";

import config from './config';

function Page1 () {
	return(
		<View style={styles.page1}>
			<EnterRoomCode />
			<CreateNewRoom />
		</View>
	)
}

function Page2 () {
	return(
		<View style={styles.page2}>
			<ShowRoom roomCode="A1B2C3" />
			<Counter count={39} />
			<CountButton increaseCount={() => console.log("increasing count")} />
		</View>
	)
}

export default function App() {
	const pages = [
		<Page1 />,
		<Page2 />,
	]
	const [page, setPage] = useState(1)

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
		flexdirection: "column",
		alignitems: "flex-start",
		justifycontent: "space-around",
		width: "100%",
	},
	page1: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-around",
		width: "100%",

	}

});
