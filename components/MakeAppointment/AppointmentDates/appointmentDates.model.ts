import Animated from "react-native-reanimated";

export interface iAppointmentDateItem {
  id: number;
  day: string;
  date: string;
  selected: boolean;
}

export interface iAppointmentDateItemProps {
  item: iAppointmentDateItem;
  handleAppointmentDateClicked: (clickedDate: iAppointmentDateItem) => void;
}
