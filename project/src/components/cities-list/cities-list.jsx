import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import cityProp from './city.prop';
import {ActionCreator} from '../../store/action';

function CitiesList(props) {
  const {
    list,
    currentCity,
    setCity,
  } = props;

  const setActiveClass = (city) => city.name === currentCity.name ? 'tabs__item--active' : '';
  const handleClick = (e, city) => {
    e.preventDefault();
    setCity(city);
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
                className={`locations__item-link tabs__item ${setActiveClass(item)}`}
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

const mapStateToProps = (state) => ({
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  setCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

CitiesList.propTypes = {
  list: PropTypes.arrayOf(cityProp),
  currentCity: cityProp,
  setCity: PropTypes.func.isRequired,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
