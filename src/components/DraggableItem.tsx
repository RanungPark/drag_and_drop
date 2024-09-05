import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Item } from './Board';
import styled from 'styled-components';

interface DraggableItemProps {
  item: Item;
  index: number;
}

const DraggableItem = ({ item, index }: DraggableItemProps) => {
  const { id, content } = item;
  return (
    <Draggable key={id} index={index} draggableId={id}>
      {(provided, snapshot) => (
        <ItemWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {content}
        </ItemWrapper>
      )}
    </Draggable>
  );
};

const ItemWrapper = styled.div`
  font-size: x-large;
`;

export default DraggableItem;
