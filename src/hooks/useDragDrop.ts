import { DragDropType, MultiReorderType } from './../@types/DragDropType';
import {
  addItemsReorder,
  diffColumnReorder,
  multiColumnReorder,
  removeItemsFromColumns,
  sameColumnReorder,
} from '@utils/reorderUtils';
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

  const handleSingleReorder: ColumnRoderType = ({ destination, source }) => {
    if (source.droppableId === destination.droppableId) {
      handleSameColumnReorder({ destination, source });
    } else if (source.droppableId !== destination.droppableId) {
      handleDiffColumnReorder({ destination, source });
    }
  };

  const handleMultiReorder: MultiReorderType = ({ destination, multiSelectedItems }) => {
    setColumns((prevColumns) => {
      const { newColumns, removedItems } = removeItemsFromColumns({
        columns: prevColumns,
        multiSelectedItems,
      });

      return multiColumnReorder({ newColumns, destination, removedItems });
    });
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
    handleSingleReorder,
    handleMultiReorder,
    handleAddColumn,
    handleAddItem,
    handleDeleteItem,
  };
};

export default useDragDrop;
