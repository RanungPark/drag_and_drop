import React, { createContext, ReactNode, useMemo } from 'react';

import useDragDrop from '@hooks/useDragDrop';
import { getItems } from '@utils/createItems';
import { DragDropContextType } from 'src/@types/DragDropType';

export const DragDropContext = createContext<DragDropContextType>({} as DragDropContextType);

const DragDropProvider = ({ children }: { children: ReactNode }) => {
  const {
    columns,
    thirdColunmsKey,
    handleSameColumnReorder,
    handleDiffColumnReorder,
    handleSingleReorder,
    handleMultiReorder,
    handleAddColumn,
    handleAddItem,
    handleDeleteItem,
  } = useDragDrop({
    [`First Column`]: getItems('First Column', 3),
    [`Second Column`]: getItems('Second Column', 4),
    [`Third Column`]: getItems('Third Column', 1),
    [`Fourth Column`]: getItems('Fourth Column', 2),
  });

  const value = useMemo(
    () => ({
      columns,
      thirdColunmsKey,
      handleSameColumnReorder,
      handleDiffColumnReorder,
      handleSingleReorder,
      handleMultiReorder,
      handleAddColumn,
      handleAddItem,
      handleDeleteItem,
    }),
    [columns],
  );

  return <DragDropContext.Provider value={value}>{children}</DragDropContext.Provider>;
};

export default DragDropProvider;
