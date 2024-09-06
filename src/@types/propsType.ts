import { ItemsType, ItemType } from './DragDropType';

export interface DroppableColumnProps {
  items: ItemsType;
  droppableId: string;
}

export interface DraggableItemProps {
  item: ItemType;
  index: number;
  droppableId: string;
}

export type AddDraggableItemProps = Pick<DraggableItemProps, 'droppableId'>;

export type DeletDraggableItemProps = Omit<DraggableItemProps, 'item'>;
