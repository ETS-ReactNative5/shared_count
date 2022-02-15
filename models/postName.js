export default function postName (webSocket, roomId, userName) {
	webSocket.send(
		JSON.stringify({
  		    event: 'user.joined',
  		    username: userName
  		})
	)
    console.log(`posting name ${userName} on room ${roomId}`)
}