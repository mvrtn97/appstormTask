import { useEffect } from 'react';
import { Header } from './Header';
import { FoodType, ListContainerProps, ListItem } from '../models/models';

const fruitsData: ListItem[] = [
  { id: 1, name: 'Jabłka' },
  { id: 2, name: 'Banany' },
  { id: 3, name: 'Pomarańcze' },
  { id: 4, name: 'Wiśnie' }
];

const vegetablesData: ListItem[] = [
  { id: 1, name: 'Marchewki' },
  { id: 2, name: 'Pomidory' },
  { id: 3, name: 'Ogórki' },
  { id: 4, name: 'Cebule' }
];

export const ListContainer = ({
  value,
  selectedIds,
  setSelectedIds,
  data,
  setData
}: ListContainerProps) => {
  const listData =
    value === FoodType.fruits.toLowerCase()
      ? fruitsData
      : value === FoodType.vegetables.toLowerCase()
        ? vegetablesData
        : [];

  useEffect(() => {
    setData(listData);
  }, [value]);

  const labelName =
    value === FoodType.fruits.toLowerCase()
      ? 'Owoce'
      : value === FoodType.vegetables.toLowerCase()
        ? 'Warzywa'
        : 'Nie wybrano kategorii jedzenia';

  return (
    <>
      <Header
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        data={data}
        labelName={labelName}></Header>
    </>
  );
};
