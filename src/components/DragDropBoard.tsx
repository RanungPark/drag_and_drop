import React, { useCallback } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import DroppableColumn from './DroppableColumn';
import styled from 'styled-components';
import useDragDropContext from '@hooks/useDragDropContex';
import AddDroppableColumn from './AddDroppableColumn';

const DragDropBoard = () => {
  const { columns, handleSameColumnReorder, handleDiffColumnReorder } = useDragDropContext();

  const onDragEnd = useCallback(
    ({ destination, source }: DropResult) => {
      if (!destination) {
        return;
      }
      if (destination.droppableId === Object.keys(columns)[2]) {
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board>
        {Object.keys(columns).map((key) => (
          <DroppableColumn key={key} items={columns[key]} droppableId={key} />
        ))}

        <AddDroppableColumn />
      </Board>
    </DragDropContext>
  );
};

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 50px;
`;

export default DragDropBoard;
