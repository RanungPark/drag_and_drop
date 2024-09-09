import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import styled from 'styled-components';

import useDragDropContext from '@hooks/useDragDropContex';
import { MultiSelectedItemType } from 'src/@types/DragDropType';
import { DeletDraggableItemProps } from 'src/@types/propsType';

const DeletDraggableItem = ({
  columnKey,
  index,
  handleMultiSelected,
  itemId,
}: DeletDraggableItemProps) => {
  const { handleDeleteItem } = useDragDropContext();

  const handleDelete = (e: React.MouseEvent) => {
    handleDeleteItem({ columnKey, index });
    const deleteItem: MultiSelectedItemType = {
      itemId,
      index,
      columnKey,
    };
    handleMultiSelected(e, deleteItem);
  };

  return (
    <DeleteButton onClick={handleDelete}>
      <RxCrossCircled />
    </DeleteButton>
  );
};

const DeleteButton = styled.button`
  padding: 5px;
  background-color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.warning};
`;

export default DeletDraggableItem;
