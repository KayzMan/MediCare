import moment from "moment";

// 👇 models
import { iAppointmentDateItem } from "./appointmentDates.model";

let weekDays: string[] = moment.weekdaysShort();

export const loadAppointmentDates = (): iAppointmentDateItem[] => {
  let dates: iAppointmentDateItem[] = [
    ...weekDays,
    ...weekDays,
    ...weekDays,
    ...weekDays,
  ].map((weekDay, index) => ({
    id: index + 1,
    day: weekDay,
    date: (index + 1).toString().padStart(2, "0"),
    selected: index === 2,
  }));

  return dates;
};
