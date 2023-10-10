export interface iEventItem {
  id: number;
  date: Date;
  title: string;
  doctorName: string;
  completed: boolean;
}

export interface iEventItemProps {
  item: iEventItem;
}
