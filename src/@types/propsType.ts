import {
  HandleMultiSelectedType,
  ItemsType,
  ItemType,
  MultiSelectedItemsType,
} from './DragDropType';

export interface DroppableColumnProps {
  items: ItemsType;
  columnKey: string;
  isSelectedEven: boolean;
  selectedItemId: string;
  multiSelectedItems: MultiSelectedItemsType;
  handleMultiSelected: HandleMultiSelectedType;
}

export interface DraggableItemProps {
  item: ItemType;
  index: number;
  columnKey: string;
  isSelectedEven: boolean;
  selectedItemId: string;
  multiSelectedItems: MultiSelectedItemsType;
  handleMultiSelected: HandleMultiSelectedType;
}

export type AddDraggableItemProps = Pick<DraggableItemProps, 'columnKey'>;

export type DeletDraggableItemProps = Pick<
  DraggableItemProps,
  'index' | 'columnKey' | 'handleMultiSelected'
> & {
  itemId: string;
};
