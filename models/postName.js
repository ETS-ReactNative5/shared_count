export default function postName (webSocket, username) {
	webSocket.send(
		JSON.stringify({
  		    event: 'user.joined',
  		    username: username
  		})
	)
}