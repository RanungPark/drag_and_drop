import { ItemsType } from 'src/@types/DragDropType';
import { getItem } from './createItems';

type ReorderProps = {
  list: ItemsType;
  sourceIndex: number;
  destinationIndex: number;
};

type DiffReorderProps = Omit<ReorderProps, 'list'> & {
  sourceList: ItemsType;
  destinationList: ItemsType;
};

type AddItemsReorderProps = {
  column: ItemsType;
  columnKey: string;
  itemValue: string;
};

export const sameColumnReorder = ({ list, sourceIndex, destinationIndex }: ReorderProps) => {
  const listCopy = [...list];
  const [removedItem] = listCopy.splice(sourceIndex, 1);

  listCopy.splice(destinationIndex, 0, removedItem);

  return listCopy;
};

export const diffColumnReorder = ({
  sourceList,
  destinationList,
  sourceIndex,
  destinationIndex,
}: DiffReorderProps) => {
  const sourcCopy = [...sourceList];
  const destinationCopy = [...destinationList];

  const [removedItem] = sourcCopy.splice(sourceIndex, 1);
  destinationCopy.splice(destinationIndex, 0, removedItem);

  return [sourcCopy, destinationCopy];
};

export const addItemsReorder = ({ column, columnKey, itemValue }: AddItemsReorderProps) => {
  const columnCopy = [...column];
  const k = columnCopy.length;

  const newItem = getItem(columnKey, itemValue, k);

  const addItemList = [...columnCopy, newItem];

  return [addItemList];
};
