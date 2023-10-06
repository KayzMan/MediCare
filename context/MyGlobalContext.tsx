import React, { Dispatch, SetStateAction } from "react";
import { createContext, useContext } from "react";

export type GlobalContext = {
  Gluten_FontLoaded?: boolean;
};

export const MyGlobalContext = createContext<GlobalContext>({
  Gluten_FontLoaded: false,
});

export const useGlobalContext = () => useContext(MyGlobalContext);
