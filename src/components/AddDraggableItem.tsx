import React from 'react';
import styled from 'styled-components';

import useDragDropContext from '@hooks/useDragDropContex';
import useInput from '@hooks/useInput';
import { AddDraggableItemProps } from 'src/@types/propsType';

const AddDraggableItem = ({ columnKey }: AddDraggableItemProps) => {
  const { handleAddItem } = useDragDropContext();
  const [itemValue, handleChange, clearValue] = useInput('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!itemValue) return;
    handleAddItem({ columnKey, itemValue });

    clearValue();
  };

  return (
    <AddItem onSubmit={handleSubmit}>
      <Input placeholder="Add Item" type="text" value={itemValue} onChange={handleChange} />
    </AddItem>
  );
};

const AddItem = styled.form``;

const Input = styled.input`
  padding: 10px;
  color: ${({ theme }) => theme.colors.netural};
  width: 100%;
  font-size: medium;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary_light};
  }
`;

export default AddDraggableItem;
