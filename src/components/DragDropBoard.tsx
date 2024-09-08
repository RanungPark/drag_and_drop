import React, { useCallback, useState } from 'react';
import { DragDropContext, DragStart, DragUpdate, DropResult } from 'react-beautiful-dnd';
import DroppableColumn from './DroppableColumn';
import styled from 'styled-components';
import useDragDropContext from '@hooks/useDragDropContex';
import AddDroppableColumn from './AddDroppableColumn';
import useIsSelectedEven from '@hooks/useIsSelectedEven';
import useSelected from '@hooks/useSelected';

const DragDropBoard = () => {
  const { columns, thirdColunmsKey, handleSameColumnReorder, handleDiffColumnReorder } =
    useDragDropContext();
  const { selectedItemId, selectedIndex, selectedColumnkey, handleSelected, resetSelected } =
    useSelected();
  const { isSelectedEven, handleSelectedEven, resetIsSelectedEven } = useIsSelectedEven();

  const onDragStart = (start: DragStart) => {
    handleSelected(start);
  };

  const onDragUpdate = (update: DragUpdate) => {
    const { destination } = update;
    if (!destination) return;

    const selectColumnLength = columns[selectedColumnkey].length - 1;

    handleSelectedEven(selectedIndex, selectedColumnkey, update, selectColumnLength);
  };

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      resetSelected();

      if (!destination) {
        return;
      }

      const destinationColunmLength = columns[destination.droppableId].length - 1;

      if (resetIsSelectedEven(result, destinationColunmLength)) return;

      if (destination.droppableId === thirdColunmsKey) return;

      if (source.droppableId === destination.droppableId) {
        handleSameColumnReorder({ destination, source });
      } else if (source.droppableId !== destination.droppableId) {
        handleDiffColumnReorder({ destination, source });
      }
    },

    [columns],
  );

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <Board>
        {Object.keys(columns).map((key) => (
          <DroppableColumn
            key={key}
            items={columns[key]}
            columnKey={key}
            isSelectedEven={isSelectedEven}
            selectedItemId={selectedItemId}
          />
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
