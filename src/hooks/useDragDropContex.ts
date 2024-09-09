import { useContext } from 'react';

import { DragDropContext } from '@contexts/DragDropContext';

const useDragDropContext = () => {
  const context = useContext(DragDropContext);

  if (context === undefined) {
    throw new Error('useDragDropContext는 DragDropProvider 내부에서만 사용할 수 있습니다.');
  }

  return context;
};

export default useDragDropContext;
