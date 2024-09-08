import { ItemsType, ItemType } from './DragDropType';

export interface DroppableColumnProps {
  items: ItemsType;
  columnKey: string;
  isSelectedEven: boolean;
  selectedItemId:string
}

export interface DraggableItemProps {
  item: ItemType;
  index: number;
  columnKey: string;
  isSelectedEven: boolean;
  selectedItemId:string
}

export type AddDraggableItemProps = Pick<DraggableItemProps, 'columnKey'>;

export type DeletDraggableItemProps = Pick<DraggableItemProps, 'index' | 'columnKey'>;
