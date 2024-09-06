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
  droppableId,
  itemValue,
}: {
  droppableId: string;
  itemValue: string;
}) => void;

export type DeleteItemType = ({
  droppableId,
  index,
}: {
  droppableId: string;
  index: number;
}) => void;


export interface DragDropType {
  columns: ColumnType;
  handleSameColumnReorder: ColumnRoderType;
  handleDiffColumnReorder: ColumnRoderType;
  handleAddColumn: (columnKey: string) => void;
  handleAddItem: AddItemType;
  handleDeleteItem: DeleteItemType;
}