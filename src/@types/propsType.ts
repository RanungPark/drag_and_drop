import { ItemsType, ItemType } from './DragDropType';

export interface DroppableColumnProps {
  items: ItemsType;
  columnKey: string;
}

export interface DraggableItemProps {
  item: ItemType;
  index: number;
  columnKey: string;
}

export type AddDraggableItemProps = Pick<DraggableItemProps, 'columnKey'>;

export type DeletDraggableItemProps = Omit<DraggableItemProps, 'item'>;
