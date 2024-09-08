import { useState } from 'react';
import { DragUpdate, DropResult } from 'react-beautiful-dnd';

const useIsSelectedEven = () => {
  const [isSelectedEven, setIsSelectedEven] = useState(false);

  const handleSelectedEven = (
    selectIndex: number,
    selectColumnkey: string,
    { destination }: DragUpdate,
    columnLength: number,
  ) => {
    if (!destination) return;

    if (selectIndex % 2 === 1) {
      if (selectColumnkey === destination.droppableId) {
        if (
          (selectIndex > destination.index && destination.index % 2 === 1) ||
          (selectIndex < destination.index &&
            destination.index % 2 === 0 &&
            columnLength !== destination.index)
        ) {
          setIsSelectedEven(true);
        } else setIsSelectedEven(false);
      } else if (selectColumnkey !== destination.droppableId) {
        setIsSelectedEven(false);
      }
    }
  };

  const resetIsSelectedEven = ({ source, destination }: DropResult, columnLength: number) => {
    if (!destination) {
      return true;
    }

    if (source.index % 2 === 1) {
      if (source.droppableId === destination.droppableId) {
        if (
          (source.index > destination.index && destination.index % 2 === 1) ||
          (source.index < destination.index &&
            destination.index % 2 === 0 &&
            columnLength !== destination.index)
        ) {
          setIsSelectedEven(false);
          return true;
        }
      }
    }
  };

  return { isSelectedEven, handleSelectedEven, resetIsSelectedEven };
};

export default useIsSelectedEven;
