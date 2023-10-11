// 👇 models
import { iProfileBottom } from "./profileBottom.model";

export const loadProfileBottomItems = (): iProfileBottom[] => {
  let bottomItems: iProfileBottom[] = [
    {
      id: 1,
      icon: "creditcard",
      iconSource: "antDesign",
      title: "Subscription & payment",
    },
    {
      id: 2,
      icon: "user",
      iconSource: "antDesign",
      title: "Profile Settings",
    },
    {
      id: 3,
      icon: "lock-outline",
      iconSource: "materialCommunity",
      title: "Password",
    },
    {
      id: 4,
      icon: "bells",
      iconSource: "antDesign",
      title: "Notifications",
    },
    {
      id: 5,
      icon: "logout",
      iconSource: "antDesign",
      title: "Logout",
    },
  ];

  return bottomItems;
};
