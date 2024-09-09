import { DraggableLocation } from 'react-beautiful-dnd';

export interface ItemType {
  id: string;
  content: string;
}

export type ItemsType = ItemType[];

export interface ColumnType {
  [key: string]: ItemsType;
}

export type MultiSelectedItemType = {
  itemId: string;
  columnKey: string;
  index: number;
};

export type MultiSelectedItemsType = MultiSelectedItemType[];

export type ColumnRoderType = ({
  destination,
  source,
}: {
  destination: DraggableLocation;
  source: DraggableLocation;
}) => void;

export type MultiReorderType = ({
  destination,
  multiSelectedItems,
}: {
  destination: DraggableLocation;
  multiSelectedItems: MultiSelectedItemsType;
}) => void;

export type AddItemType = ({
  columnKey,
  itemValue,
}: {
  columnKey: string;
  itemValue: string;
}) => void;

export type DeleteItemType = ({ columnKey, index }: { columnKey: string; index: number }) => void;

export type HandleMultiSelectedType = (
  e: React.MouseEvent,
  multiSelectedItem: MultiSelectedItemType,
) => void;

export interface DragDropType {
  columns: ColumnType;
  thirdColunmsKey: string;
  handleSameColumnReorder: ColumnRoderType;
  handleDiffColumnReorder: ColumnRoderType;
  handleSingleReorder: ColumnRoderType;
  handleMultiReorder: MultiReorderType;
  handleAddColumn: (columnKey: string) => void;
  handleAddItem: AddItemType;
  handleDeleteItem: DeleteItemType;
}

export type DragDropContextType = DragDropType;
