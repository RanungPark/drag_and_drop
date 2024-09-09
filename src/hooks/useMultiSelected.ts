import { useState } from 'react';
import { HandleMultiSelectedType, MultiSelectedItemsType } from 'src/@types/DragDropType';

const useMultiSelected = () => {
  const [multiSelectedItems, setMultiSelectedItems] = useState<MultiSelectedItemsType>(
    [] as MultiSelectedItemsType,
  );

  const handleMultiSelected: HandleMultiSelectedType = (e, multiSelectedItem) => {
    if (e.ctrlKey || e.metaKey || e.shiftKey) {
      setMultiSelectedItems((prev) => {
        if (prev.length) {
          const isItemAlreadySelected = prev.some(
            (item) => item.itemId === multiSelectedItem.itemId,
          );

          if (isItemAlreadySelected) {
            return prev.filter((item) => item.itemId !== multiSelectedItem.itemId);
          } else {
            return [...prev, multiSelectedItem];
          }
        } else return [...prev, multiSelectedItem];
      });
    } else if (e.currentTarget.tagName === 'BUTTON') {
      setMultiSelectedItems((prev) =>
        prev.filter((item) => item.itemId !== multiSelectedItem.itemId),
      );
    }
  };

  const resetMultiSelected = () => {
    setMultiSelectedItems([] as MultiSelectedItemsType);
  };

  return { multiSelectedItems, handleMultiSelected, resetMultiSelected };
};

export default useMultiSelected;
