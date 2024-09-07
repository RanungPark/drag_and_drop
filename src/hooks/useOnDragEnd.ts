import { useCallback } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import useDragDropContext from './useDragDropContex';

const useOnDragEnd = () => {
  const { columns, thirdColunmsKey, handleSameColumnReorder, handleDiffColumnReorder } =
    useDragDropContext();

  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) {
        return;
      }
      if (destination.droppableId === thirdColunmsKey) {
        return;
      }
      if (source.droppableId === destination.droppableId) {
        handleSameColumnReorder({ destination, source });
      } else if (source.droppableId !== destination.droppableId) {
        handleDiffColumnReorder({ destination, source });
      }
    },

    [columns],
  );

  return [onDragEnd];
};

export default useOnDragEnd;
