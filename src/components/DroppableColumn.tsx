import React, { memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import DraggableItem from './DraggableItem';
import styled from 'styled-components';
import AddDraggableItem from './AddDraggableItem';
import { AreaProps } from 'src/@types/styledPropsType';
import { DroppableColumnProps } from 'src/@types/propsType';

const DroppableColumn = memo(
  ({
    items,
    columnKey,
    isSelectedEven,
    selectedItemId,
    handleMultiSelected,
    multiSelectedItems,
  }: DroppableColumnProps) => {
    return (
      <Column>
        <Title>{columnKey}</Title>
        <Droppable droppableId={columnKey}>
          {(provided, snapshot) => (
            <Area
              isDraggingOver={snapshot.isDraggingOver}
              draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => (
                <DraggableItem
                  key={item.id}
                  item={item}
                  index={index}
                  columnKey={columnKey}
                  isSelectedEven={isSelectedEven}
                  selectedItemId={selectedItemId}
                  multiSelectedItems={multiSelectedItems}
                  handleMultiSelected={handleMultiSelected}
                />
              ))}
              {provided.placeholder}
              <AddDraggableItem columnKey={columnKey} />
            </Area>
          )}
        </Droppable>
      </Column>
    );
  },
);

const Column = styled.div`
  width: 300px;
  min-height: 300px;
  max-height: 500px;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: large;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  color: #343a40;
`;

const Area = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isDraggingOver' && prop !== 'draggingFromThisWith',
})<AreaProps>`
  border: 2px solid #d5bdaf;
  background-color: ${({ isDraggingOver, draggingFromThisWith, theme }) => {
    if (isDraggingOver) {
      return theme.colors.bg_dark;
    }
    if (draggingFromThisWith) {
      return theme.colors.bg_light;
    }
    return theme.colors.bg;
  }};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default DroppableColumn;
