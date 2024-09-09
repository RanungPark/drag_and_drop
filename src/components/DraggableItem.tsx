import React, { memo, useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DeletDraggableItem from './DeletDraggableItem';
import useDragDropContext from '@hooks/useDragDropContex';
import { ItemProps } from 'src/@types/styledPropsType';
import { DraggableItemProps } from 'src/@types/propsType';
import { MultiSelectedItemType } from 'src/@types/DragDropType';

const DraggableItem = memo(
  ({
    item,
    index,
    columnKey,
    isSelectedEven,
    selectedItemId,
    handleMultiSelected,
    multiSelectedItems,
  }: DraggableItemProps) => {
    const { id: itemId, content } = item;
    const { thirdColunmsKey } = useDragDropContext();
    const [isMulitSelected, setIsMulitSelected] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
      const SelectedItem: MultiSelectedItemType = {
        itemId,
        index,
        columnKey,
      };
      handleMultiSelected(e, SelectedItem);
    };

    useEffect(() => {
      if (multiSelectedItems.length) {
        const isSelected = multiSelectedItems.some((itme) => itme.itemId === itemId);
        setIsMulitSelected(isSelected);
      } else setIsMulitSelected(false);
    }, [multiSelectedItems, itemId]);

    return (
      <Draggable key={itemId} index={index} draggableId={itemId}>
        {(provided, snapshot) => (
          <Item
            onClick={handleClick}
            isDragging={snapshot.isDragging}
            draggingOver={snapshot.draggingOver === thirdColunmsKey}
            isSelectedEven={isSelectedEven}
            selectedItemId={selectedItemId === itemId}
            isMulitSelected={isMulitSelected}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {content}
            <DeletDraggableItem
              columnKey={columnKey}
              index={index}
              handleMultiSelected={handleMultiSelected}
              itemId={itemId}
            />
          </Item>
        )}
      </Draggable>
    );
  },
);

const Item = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    prop !== 'isDragging' &&
    prop !== 'draggingOver' &&
    prop !== 'isSelectedEven' &&
    prop !== 'selectedItemId' &&
    prop !== 'isMulitSelected',
})<ItemProps>`
  font-size: medium;
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${({ isDragging, isMulitSelected, theme }) =>
    (isDragging && theme.colors.primary_light) ||
    (isMulitSelected && theme.colors.secondary) ||
    theme.colors.primary};
  box-shadow: ${(props) => (props.isDragging ? '0px 2px 5px rgba(0, 0, 0, 0.05)' : 'none')};
  transition:
    background-color 0.3s ease-in-out,
    border 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.netural};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  border: 1.5px solid
    ${({ draggingOver, theme, isSelectedEven, selectedItemId }) =>
      draggingOver || (isSelectedEven && selectedItemId) ? theme.colors.warning : `none`};

  &:hover {
    opacity: 0.8;
  }
`;

export default DraggableItem;
