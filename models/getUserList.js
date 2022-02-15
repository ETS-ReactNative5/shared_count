export default function getUserList (webSocket)  {
    console.log(`getting the user list`)
    webSocket.send(JSON.stringify({
        event: "users.list"
    }))
}