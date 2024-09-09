import { DraggableLocation } from 'react-beautiful-dnd';

import { ColumnType, ItemsType, MultiSelectedItemsType } from 'src/@types/DragDropType';

import { newItem } from './createItems';

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

type RemoveItemsFromColumnsProps = {
  columns: ColumnType;
  multiSelectedItems: MultiSelectedItemsType;
};

type MultiColumnReorder = {
  newColumns: ColumnType;
  destination: DraggableLocation;
  removedItems: ItemsType;
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

export const removeItemsFromColumns = ({
  columns,
  multiSelectedItems,
}: RemoveItemsFromColumnsProps) => {
  const newColumns = { ...columns };
  const removedItems: ItemsType = [];

  multiSelectedItems.forEach(({ itemId, columnKey }) => {
    const column = newColumns[columnKey];
    if (!column) return;

    const itemToRemove = column.find((item) => item.id === itemId);
    if (itemToRemove) {
      removedItems.push(itemToRemove);
      newColumns[columnKey] = column.filter((item) => item.id !== itemId);
    }
  });

  return { newColumns, removedItems };
};

export const multiColumnReorder = ({
  newColumns,
  destination,
  removedItems,
}: MultiColumnReorder) => {
  const destinationColumn = newColumns[destination.droppableId];
  if (destinationColumn) {
    const insertIndex = destination.index;
    newColumns[destination.droppableId] = [
      ...destinationColumn.slice(0, insertIndex),
      ...removedItems,
      ...destinationColumn.slice(insertIndex),
    ];
  }
  return newColumns;
};

export const addItemsReorder = ({ column, columnKey, itemValue }: AddItemsReorderProps) => {
  const columnCopy = [...column];

  const item = newItem(columnKey, itemValue);

  const addItemList = [...columnCopy, item];

  return [addItemList];
};
