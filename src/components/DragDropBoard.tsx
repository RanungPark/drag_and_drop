import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import DroppableColumn from './DroppableColumn';
import styled from 'styled-components';
import useDragDropContext from '@hooks/useDragDropContex';
import AddDroppableColumn from './AddDroppableColumn';
import useOnDragEnd from '@hooks/useOnDragEnd';

const DragDropBoard = () => {
  const { columns } = useDragDropContext();

  const [onDragEnd] = useOnDragEnd();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Board>
        {Object.keys(columns).map((key) => (
          <DroppableColumn key={key} items={columns[key]} columnKey={key} />
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
