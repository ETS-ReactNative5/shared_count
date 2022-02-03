import { 
    StyleSheet,
    Text,
	SafeAreaView,
	View,
	StatusBar
} from 'react-native';

import {
	TitleBar,
	EnterRoomCode,
	CreateNewRoom
} from "./components";


export default function App() {
  	return (
    	<SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
			<TitleBar />

			<View style={styles.page1}>
				<EnterRoomCode />
				<CreateNewRoom />
			</View>

    	  	<StatusBar style="auto" />
    	</SafeAreaView>
  	);
}

const styles = StyleSheet.create({
  	container: {
    	backgroundColor: '#fff',
  	},
	AndroidSafeArea: {
	    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
	},
	page1: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-around",
		width: "100%",
	}

});
