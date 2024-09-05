import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DraggableItem from './DraggableItem';
import { Item } from './Board';
import styled from 'styled-components';

interface DroppableColumnProps {
  items: Item[];
}

const DroppableColumn = ({ items }: DroppableColumnProps) => {
  return (
    <Droppable droppableId="Droppable">
      {(provided, snapshot) => (
        <ColumnWrapper {...provided.droppableProps} ref={provided.innerRef}>
          {items.map((item, index) => (
            <DraggableItem item={item} index={index} />
          ))}
          {provided.placeholder}
        </ColumnWrapper>
      )}
    </Droppable>
  );
};

const ColumnWrapper = styled.div``;

export default DroppableColumn;
