import React from 'react';
import styled from 'styled-components';

import { ReactComponent as CrossCircled } from '@assets/svg/cross-circled.svg';
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
      <CrossCircled />
    </DeleteButton>
  );
};

const DeleteButton = styled.button`
  width: 24px;
  padding: 5px;
  background-color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & path {
    fill: ${({ theme }) => theme.colors.warning};
  }
`;

export default DeletDraggableItem;
