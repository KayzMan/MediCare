// 👇 models
import { HomeDoctorCategoryItem } from "./doctorCategories.model";

export const loadHomeDoctorsCategories = (): HomeDoctorCategoryItem[] => {
  let doctorCategories: HomeDoctorCategoryItem[] = [
    {
      id: 1,
      name: "Cardiologist",
      icon: "heart",
    },
    {
      id: 2,
      name: "Ophthalmologist",
      icon: "eye",
    },
    {
      id: 3,
      name: "Veterinarian",
      icon: "paw",
    },
    {
      id: 4,
      name: "Pedestrian",
      icon: "human",
    },
    {
      id: 5,
      name: "Gynecologist",
      icon: "human-pregnant",
    },
  ];

  return doctorCategories;
};
