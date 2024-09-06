import useDragDropContext from '@hooks/useDragDropContex';
import useInput from '@hooks/useInput';
import React, { useState } from 'react';
import styled from 'styled-components';

const AddDroppableColumn = () => {
  const { columns, handleAddColumn } = useDragDropContext();
  const [columnKey, handleChange, clearValue] = useInput('');
  const [helpMessage, setHelpMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!columnKey) return;

    if (columnKey in columns) {
      setHelpMessage('동일한 칼럼이 존재합니다.');
      return;
    }

    handleAddColumn(columnKey);

    setHelpMessage('');
    clearValue();
  };

  return (
    <AddColumn onSubmit={handleSubmit}>
      <Label>
        <Title>Add Column</Title>
        <Input type="text" value={columnKey} onChange={handleChange} />
        <Button>Add</Button>
      </Label>
      <HelpMessage>{helpMessage}</HelpMessage>
    </AddColumn>
  );
};

const AddColumn = styled.form`
  width: 300px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  border-radius: 5px;
  padding: 20px;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.p`
  font-size: medium;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.netural};
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 5px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary_light};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: large;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.netural_light};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const HelpMessage = styled.p`
  font-size: small;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.warning};
`;

export default AddDroppableColumn;
