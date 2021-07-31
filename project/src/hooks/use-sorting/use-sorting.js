import {useState} from 'react';

export const useSorting = (setSortType) => {
  const [showOptions, setShowOptions] = useState(false);

  const getListClassName = () => {
    const className = 'places__options places__options--custom';
    return `${className} ${showOptions ? 'places__options--opened' : ''}`;
  };

  const handleClickOption = (sortType) => {
    setSortType(sortType);
    setShowOptions(false);
  };

  return [showOptions, setShowOptions, handleClickOption, getListClassName()];
};
