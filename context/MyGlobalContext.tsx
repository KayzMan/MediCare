import { ImageSourcePropType } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";

// 👇 models
import { HomeDoctorItem } from "../components/Home/Home Doctors/homeDoctors.model";
import { iSelectedChatItem } from "../components/Chats/AllChats/allChats.model";

export type GlobalContext = {
  Ubuntu_FontLoaded?: boolean;
  selectedDoctor: HomeDoctorItem | null;
  setSelectedDoctor: Dispatch<SetStateAction<HomeDoctorItem | null>>;
  selectedChat: iSelectedChatItem | null;
  setSelectedChat: Dispatch<SetStateAction<iSelectedChatItem | null>>;
};

export const MyGlobalContext = createContext<GlobalContext>({
  Ubuntu_FontLoaded: false,
  selectedDoctor: null,
  setSelectedDoctor: () => {},
  selectedChat: null,
  setSelectedChat: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
