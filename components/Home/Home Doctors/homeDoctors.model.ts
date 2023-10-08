import { ImageSourcePropType } from "react-native";

export interface HomeDoctorItem {
  id: number;
  avatar: ImageSourcePropType;
  name: string;
  profession: string;
  rating: number;
  ratingText: string;
}

export interface HomeDoctorItemProps {
  item: HomeDoctorItem;
}
