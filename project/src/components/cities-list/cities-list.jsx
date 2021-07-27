import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import cityProp from './city.prop';
import {setCity} from '../../store/action';
import {getCity} from '../../store/other/selectors';

function CitiesList(props) {
  const {
    list,
  } = props;

  const currentCity = useSelector(getCity);
  const dispatch = useDispatch();

  const getTabClassName = (city) => {
    const className = 'locations__item-link tabs__item';
    return `${className} ${city.name === currentCity.name ? 'tabs__item--active' : ''}`;
  };
  const handleClick = (e, city) => {
    e.preventDefault();
    dispatch(setCity(city));
  };

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
