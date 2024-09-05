import React, { useCallback, useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import DroppableColumn from './DroppableColumn';

export type Item = {
  id: string;
  content: string;
};

type GetItemsProps = (count: number) => Item[];

type reorderProps = {
  list: Item[];
  sourceIndex: number;
  destinationIndex: number;
};

const Board = () => {
  const getItems: GetItemsProps = (count: number) =>
    Array.from({ length: count }, (v, k) => k).map((k) => ({
      id: `item-${k}`,
      content: `item ${k}`,
    }));

  const [items, setItems] = useState<Item[]>(getItems(10));

  const reorder = ({ list, sourceIndex, destinationIndex }: reorderProps) => {
    const result = [...list];
    const [removedItem] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removedItem);
    return result;
  };

  const onDragEnd = useCallback(
    ({ destination, draggableId, source }: DropResult) => {
      if (!destination) {
        return;
      }

      const newItems = reorder({
        list: items,
        sourceIndex: source.index,
        destinationIndex: destination.index,
      });

      setItems(newItems);
    },
    [items],
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DroppableColumn items={items} />
    </DragDropContext>
  );
};

export default Board;
