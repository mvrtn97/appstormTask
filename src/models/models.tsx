export interface ListItem {
  id: number;
  name: string;
  price?: number;
}

export type ListContainerProps = {
  data: ListItem[];
  setData: (data: ListItem[]) => void;
  value: string;
  selectedIds: number[];
  setSelectedIds: (ids: number[]) => void;
};

export enum FoodType {
  vegetables = 'WARZYWA',
  fruits = 'OWOCE'
}

export type HeaderProps = {
  data: ListItem[];
  selectedIds: number[];
  setSelectedIds: (ids: number[]) => void;
  labelName?: string;
};
