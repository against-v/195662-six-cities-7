import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import cityProp from './city.prop';
import {setCity} from '../../store/action';
import {useCitiesList} from '../../hooks/use-cities-list/useCitiesList';
import {getCity} from '../../store/other/selectors';

function CitiesList(props) {
  const {
    list,
  } = props;

  const currentCity = useSelector(getCity);
  const dispatch = useDispatch();
  const handleSetCity = (city) => {
    dispatch(setCity(city));
  };

  const [getTabClassName, handleClick] = useCitiesList(currentCity, handleSetCity);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          list.map((item) => (
            <li
              key={item.name}
              className="locations__item"
            >
              <a
                className={getTabClassName(item)}
                onClick={(e) => handleClick(e, item)}
                href="/"
              >
                <span>{item.name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

CitiesList.propTypes = {
  list: PropTypes.arrayOf(cityProp),
};

export default CitiesList;
