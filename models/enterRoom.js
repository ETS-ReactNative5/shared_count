import postName from "./postName";
export default function enterRoom (socketEndpoint, apiEndpoint, roomId, userName, setWebSocket, setInitialCount) {
	// validate entering room connection by http
	// <url>/room/<roomId>/
	// create websocket connection 
	// <url>/ws/counter/<roomId>
    console.log(`Entering room on roomid ${roomId}.`);

	
	let url = `${apiEndpoint}/room/${roomId}/`
    fetch(url)
    .then( resp => resp.json() )
    .then( data => {
        console.log(data)
        setInitialCount(data.result.counter_total)
    })
    .catch( e  => {
        console.log("An error ocurred when creating a room: ", e)
    })

	url = `${socketEndpoint}/${roomId}/`

	const websocket = new WebSocket(url);

	websocket.onerror = function(e) {
		console.log("WebSocket connection error.", e.code, e.reason)
	}
	websocket.onclose = function(e) {
		console.log("WebSocket connection closed.", e.code, e.reason)
	}
	websocket.onopen = () => {
		postName(websocket, roomId, userName)
	}
	
	setWebSocket(websocket)

}