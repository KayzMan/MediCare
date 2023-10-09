// 👇 models
import { HomeDoctorItem } from "./homeDoctors.model";

export const loadHomeDoctors = (): HomeDoctorItem[] => {
  let homeDoctors: HomeDoctorItem[] = [
    {
      id: 1,
      avatar: require("../../../assets/images/avatars/avatar9.jpg"),
      name: "Dr. Anna Baker",
      profession: "Heart Surgeon Specialist",
      rating: 5,
      ratingText: "4.5 | 120 Reviews",
    },
    {
      id: 2,
      avatar: require("../../../assets/images/avatars/avatar10.jpg"),
      name: "Dr. Emile Jones",
      profession: "Pediatrician",
      rating: 4,
      ratingText: "4.0 | 100 Reviews",
    },
    {
      id: 3,
      avatar: require("../../../assets/images/avatars/avatar7.jpg"),
      name: "Dr. Joe Taylor",
      profession: "Ophthalmologist",
      rating: 4,
      ratingText: "3.5 | 150 Reviews",
    },
  ];

  return homeDoctors;
};
