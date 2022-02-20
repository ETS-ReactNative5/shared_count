import { Share } from "react-native"
export default function shareRoom(roomId, roomUrl="") {
    Share.share({
        message: `Enter in our SharedCount room: ${roomId}`,
        url: roomUrl
    });
}