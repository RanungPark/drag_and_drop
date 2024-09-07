import { DragDropType } from './../@types/DragDropType';
import { addItemsReorder, diffColumnReorder, sameColumnReorder } from '@utils/reorderUtils';
import { useState } from 'react';
import { AddItemType, ColumnRoderType, ColumnType, DeleteItemType } from 'src/@types/DragDropType';

type UseDragDropType = (initialDragDrog: ColumnType) => DragDropType;

const useDragDrop: UseDragDropType = (initialDragDrog) => {
  const [columns, setColumns] = useState<ColumnType>(initialDragDrog);
  const thirdColunmsKey = Object.keys(columns)[2];

  const handleSameColumnReorder: ColumnRoderType = ({ destination, source }) => {
    const newList = sameColumnReorder({
      list: columns[source.droppableId],
      sourceIndex: source.index,
      destinationIndex: destination.index,
    });

    setColumns((prev) => ({ ...prev, [source.droppableId]: newList }));
  };

  const handleDiffColumnReorder: ColumnRoderType = ({ destination, source }) => {
    const [sourceList, destinationList] = diffColumnReorder({
      sourceList: columns[source.droppableId],
      destinationList: columns[destination.droppableId],
      sourceIndex: source.index,
      destinationIndex: destination.index,
    });

    setColumns((prev) => ({
      ...prev,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destinationList,
    }));
  };

  const handleAddColumn = (columnKey: string) => {
    setColumns((prev) => ({ ...prev, [columnKey]: [] }));
  };

  const handleAddItem: AddItemType = ({ columnKey, itemValue }) => {
    const [addItemList] = addItemsReorder({
      column: [...columns[columnKey]],
      columnKey,
      itemValue,
    });

    setColumns((prev) => ({ ...prev, [columnKey]: addItemList }));
  };

  const handleDeleteItem: DeleteItemType = ({ columnKey, index }) => {
    const DeleteItemList = columns[columnKey].filter((_, i) => i !== index);

    setColumns((prev) => ({ ...prev, [columnKey]: DeleteItemList }));
  };

  return {
    columns,
    thirdColunmsKey,
    handleSameColumnReorder,
    handleDiffColumnReorder,
    handleAddColumn,
    handleAddItem,
    handleDeleteItem,
  };
};

export default useDragDrop;
