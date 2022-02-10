export default function enterRoom (endpoint, roomId, setWebSocket) {
	// validate entering room connection by http
	// <url>/room/<roomId>/
	// create websocket connection 
	// <url>/ws/counter/<roomId>
    console.log(`Entering room on roomid ${roomId}.`);

	const url = `${endpoint}/${roomId}/`

	const websocket = new WebSocket(url);

	websocket.onerror = function(e) {
		console.log("WebSocket connection error.", e.code, e.reason)
	}
	websocket.onclose = function(e) {
		console.log("WebSocket connection closed.", e.code, e.reason)
	}

	setWebSocket(websocket)

}