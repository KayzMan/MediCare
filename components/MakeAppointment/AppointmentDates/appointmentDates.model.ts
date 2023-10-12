import { Dispatch, SetStateAction } from "react";

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
