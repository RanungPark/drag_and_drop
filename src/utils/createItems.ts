import { ItemsType, ItemType } from 'src/@types/DragDropType';

type GetItemsProps = (column: string, count: number) => ItemsType;
type newItemProps = (column: string, itemValue: string) => ItemType;

export const getItems: GetItemsProps = (column, count) =>
  Array.from({ length: count }, (_, k) => k).map((k) => ({
    id: `${column}-item-${k}`,
    content: `${column} item ${k}`,
  }));

export const newItem: newItemProps = (column, itemValue) => {
  const uniqueKey = Math.random().toString(36).substring(2, 9);
  return {
    id: `${column}-${itemValue}-${uniqueKey}`,
    content: `${itemValue}`,
  };
};
