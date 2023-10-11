import { ImageSourcePropType } from "react-native";

export interface iChatItem {
  id: number;
  name: string;
  message: string;
  unReadMessages?: number | undefined;
  lastMessageTime: string;
  avatar: ImageSourcePropType;
  isOnSideBar?: boolean;
}

export interface iChatItemProps {
  item: iChatItem;
}
