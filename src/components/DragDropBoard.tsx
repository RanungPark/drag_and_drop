import React, { useCallback } from 'react';
import { DragDropContext, DragStart, DragUpdate, DropResult } from 'react-beautiful-dnd';
import DroppableColumn from './DroppableColumn';
import styled from 'styled-components';
import useDragDropContext from '@hooks/useDragDropContex';
import AddDroppableColumn from './AddDroppableColumn';
import useIsSelectedEven from '@hooks/useIsSelectedEven';
import useSelected from '@hooks/useSelected';
import useMultiSelected from '@hooks/useMultiSelected';

const DragDropBoard = () => {
  const { columns, thirdColunmsKey, handleSingleReorder, handleMultiReorder } =
    useDragDropContext();
  const { selectedItemId, selectedIndex, selectedColumnkey, handleSelected, resetSelected } =
    useSelected();
  const { isSelectedEven, handleSelectedEven, resetIsSelectedEven } = useIsSelectedEven();
  const { multiSelectedItems, handleMultiSelected, resetMultiSelected } = useMultiSelected();

  const onDragStart = (start: DragStart) => {
    handleSelected(start);
  };

  const onDragUpdate = (update: DragUpdate) => {
    const { destination } = update;

    if (!destination || multiSelectedItems.length) return;

    const selectColumnLength = columns[selectedColumnkey].length - 1;

    handleSelectedEven(selectedIndex, selectedColumnkey, update, selectColumnLength);
  };

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId } = result;

      resetSelected();

      if (!destination || destination.droppableId === thirdColunmsKey) return;

      const isMultiSelection = multiSelectedItems.length > 0;
      const isMultiItemDragged =
        isMultiSelection && multiSelectedItems.some((item) => item.itemId === draggableId);

      if (isMultiSelection) {
        if (isMultiItemDragged) {
          handleMultiReorder({ destination, multiSelectedItems });
        } else {
          handleSingleReorder({ destination, source });
        }
        resetMultiSelected();
        return;
      }

      const destinationColunmLength = columns[destination.droppableId].length - 1;

      if (resetIsSelectedEven(result, destinationColunmLength)) return;

      handleSingleReorder({ destination, source });
    },

    [columns, multiSelectedItems],
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
            multiSelectedItems={multiSelectedItems}
            handleMultiSelected={handleMultiSelected}
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
