export default function enterRoom (roomId, setWebSocket) {
	// validate entering room connection by http
	// <url>/room/<roomId>/
	// create websocket connection 
	// <url>/ws/counter/<roomId>
    console.log(`Entering room on roomid ${roomId}.`);
	setWebSocket("websocketObject")

}