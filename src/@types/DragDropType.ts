import { DraggableLocation } from 'react-beautiful-dnd';

export interface ItemType {
  id: string;
  content: string;
}

export type ItemsType = ItemType[];

export interface ColumnType {
  [key: string]: ItemsType;
}

export type ColumnRoderType = ({
  destination,
  source,
}: {
  destination: DraggableLocation;
  source: DraggableLocation;
}) => void;

export type AddItemType = ({
  columnKey,
  itemValue,
}: {
  columnKey: string;
  itemValue: string;
}) => void;

export type DeleteItemType = ({
  columnKey,
  index,
}: {
  columnKey: string;
  index: number;
}) => void;

export interface DragDropType {
  columns: ColumnType;
  thirdColunmsKey: string;
  handleSameColumnReorder: ColumnRoderType;
  handleDiffColumnReorder: ColumnRoderType;
  handleAddColumn: (columnKey: string) => void;
  handleAddItem: AddItemType;
  handleDeleteItem: DeleteItemType;
}
