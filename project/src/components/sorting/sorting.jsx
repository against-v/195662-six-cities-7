import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {SortType} from '../../const';
import {ActionCreator} from '../../store/action';
import sortTypeProp from './sort-type.prop';

function Sorting(props) {
  const {
    currentSortType,
    setSortType,
  } = props;
  const [showOptions, setShowOptions] = useState(false);

  const getListClassName = () => {
    const className = 'places__options places__options--custom';
    return `${className} ${showOptions ? 'places__options--opened' : ''}`;
  };
  const getOptionClassName = (id) => {
    const className = 'places__option';
    return `${className} ${id === currentSortType.id ? 'places__option--active' : ''}`;
  };

  const handleClickOption = (sortType) => {
    setSortType(sortType);
    setShowOptions(false);
  };


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
        className={getListClassName()}
      >
        {
          Object.values(SortType).map((item) => (
            <li
              key={item.id}
              className={getOptionClassName(item.id)}
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

const mapStateToProps = (state) => ({
  currentSortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  setSortType(sortType) {
    dispatch(ActionCreator.setSortType((sortType)));
  },
});

Sorting.propTypes = {
  currentSortType: sortTypeProp,
  setSortType: PropTypes.func.isRequired,
};

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
