import { ItemsType, ItemType } from 'src/@types/DragDropType';

type GetItemsProps = (column: string, count: number) => ItemsType;
type newItemProps = (column: string, itemValue: string, k: number) => ItemType;

export const getItems: GetItemsProps = (column, count) =>
  Array.from({ length: count }, (_, k) => k).map((k) => ({
    id: `${column}-item-${k}`,
    content: `${column} item ${k}`,
  }));

export const getItem: newItemProps = (column, itemValue, k) => ({
  id: `${column}-item-${k}`,
  content: `${itemValue}`,
});
