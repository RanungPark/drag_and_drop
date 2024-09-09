import { useState } from 'react';
import { DragStart } from 'react-beautiful-dnd';

const useSelected = () => {
  const [selectedItemId, setSelectedItemId] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedColumnkey, setSelectedColumnkey] = useState('');

  const handleSelected = ({ source, draggableId }: DragStart) => {
    setSelectedItemId(draggableId);
    setSelectedIndex(source.index);
    setSelectedColumnkey(source.droppableId);
  };
  const resetSelected = () => {
    setSelectedItemId('');
    setSelectedIndex(-1);
    setSelectedColumnkey('');
  };

  return { selectedItemId, selectedIndex, selectedColumnkey, handleSelected, resetSelected };
};

export default useSelected;
