// 👇 models
import { iEventItem } from "./allEvents.model";

const allEvents = (): iEventItem[] => {
  let events: iEventItem[] = [
    {
      id: 1,
      title: "Diagnostic Heart",
      date: new Date(2023, 6, 11, 13, 5),
      doctorName: "Dr. Harriet Myers",
      completed: false,
    },
    {
      id: 2,
      title: "Brain Checkup",
      date: new Date(2023, 7, 24, 24, 55),
      doctorName: "Dr. Michael Rica",
      completed: false,
    },
    {
      id: 3,
      title: "Nutrition Consult",
      date: new Date(2023, 2, 3, 19, 45),
      doctorName: "Dr. Mollie Barber",
      completed: true,
    },
    {
      id: 4,
      title: "Diagnostic Corona",
      date: new Date(2023, 1, 16, 16, 25),
      doctorName: "Dr. Jean Estrada",
      completed: true,
    },
    {
      id: 5,
      title: "Pet CheckUp",
      date: new Date(2023, 0, 27, 19, 55),
      doctorName: "Dr. Joe Mellon",
      completed: true,
    },
  ];

  return events;
};

export const loadUpcomingEvents = (): iEventItem[] =>
  allEvents().filter((item) => item.completed == false);

export const loadCompletedEvents = (): iEventItem[] =>
  allEvents().filter((item) => item.completed);
