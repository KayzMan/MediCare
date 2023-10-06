import React, { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";

export type GlobalContext = {
  Ubuntu_FontLoaded?: boolean;
};

export const MyGlobalContext = createContext<GlobalContext>({
  Ubuntu_FontLoaded: false,
});

export const useGlobalContext = () => useContext(MyGlobalContext);
