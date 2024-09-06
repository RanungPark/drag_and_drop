import useDragDropContext from '@hooks/useDragDropContex';
import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';
import { DeletDraggableItemProps } from 'src/@types/propsType';
import styled from 'styled-components';

const DeletDraggableItem = ({ droppableId, index }: DeletDraggableItemProps) => {
  const { handleDeleteItem } = useDragDropContext();

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleDeleteItem({ droppableId, index });
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
