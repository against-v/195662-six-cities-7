import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {SortType} from '../../const';
import {setSortType} from '../../store/action';
import {useSorting} from '../../hooks/use-sorting/useSorting';
import {getSortType} from '../../store/other/selectors';

const getOptionClassName = (sortTypeId, currentSortTypeId) => {
  const className = 'places__option';
  return `${className} ${sortTypeId === currentSortTypeId ? 'places__option--active' : ''}`;
};

function Sorting() {
  const currentSortType = useSelector(getSortType);
  const dispatch = useDispatch();
  const handleSetSortType = (sortType) => {
    dispatch(setSortType((sortType)));
  };


  const [showOptions, setShowOptions, handleClickOption, listClassName] = useSorting(handleSetSortType);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setShowOptions(!showOptions)}
      > {currentSortType.title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={listClassName}
      >
        {
          Object.values(SortType).map((item) => (
            <li
              key={item.id}
              className={getOptionClassName(item.id, currentSortType.id)}
              tabIndex="0"
              onClick={() => handleClickOption(item)}
            >
              {item.title}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sorting;
