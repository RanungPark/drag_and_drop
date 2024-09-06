import React, { useState } from 'react';

type UseInput = (
  initialValue: string,
) => [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void];

const useInput: UseInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearValue = () => {
    setInputValue('');
  };

  return [inputValue, handleChange, clearValue];
};

export default useInput;
