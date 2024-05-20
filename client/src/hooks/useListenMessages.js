import {useSocketContext} from "../context/SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import {useEffect} from "react";

import notification from '../assets/sound/notificaiton.mp3'

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();

    useEffect(() => {
        const requestNotificationPermission = async () => {
            if (Notification.permission !== "granted") {
                const permission = await Notification.requestPermission();
                if (permission !== "granted") {
                    console.log("Notification permission denied");
                }
            }
        };

        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(notification);
            sound.play()
            setMessages([...messages, newMessage]);

            new Notification(notificationTitle, notificationOptions);
        })
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};

export default useListenMessages;