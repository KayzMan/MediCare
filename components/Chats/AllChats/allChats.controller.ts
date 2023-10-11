// 👇 models
import { iChatItem } from "./allChats.model";

export const loadAllChats = (): iChatItem[] => {
  let chatItems: iChatItem[] = [
    {
      id: 1,
      avatar: require("../../../assets/images/avatars/avatar11.jpg"),
      lastMessageTime: "14:22 am",
      message: "Hello, how can i help you?",
      name: "Dr. Ngoni Katsidzira",
      unReadMessages: 2,
    },
    {
      id: 2,
      avatar: require("../../../assets/images/avatars/avatar10.jpg"),
      lastMessageTime: "05:25 pm",
      message: "Thank you for visiting",
      name: "Dr. Elizabeth Scott",
    },
    {
      id: 3,
      avatar: require("../../../assets/images/avatars/avatar9.jpg"),
      lastMessageTime: "12:32 am",
      message: "What was your last meal?",
      name: "Dr. Miguel Johnson",
      unReadMessages: 1,
    },
    {
      id: 4,
      avatar: require("../../../assets/images/avatars/avatar8.jpg"),
      lastMessageTime: "07:56 am",
      message: "I have a bad headache",
      name: "Dr. Sarah Palson",
    },
    {
      id: 5,
      avatar: require("../../../assets/images/avatars/avatar7.jpg"),
      lastMessageTime: "16:45 am",
      message: "Hello, how can i help you?",
      name: "Dr. Anna Handy",
    },
  ];

  return chatItems;
};
