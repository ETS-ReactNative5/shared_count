import { Share } from "react-native"
export default function shareRoom(roomId) {
    Share.share({
        message: `Enter in our SharedCount room: ${roomId}`
    });
}