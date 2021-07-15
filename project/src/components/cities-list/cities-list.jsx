import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import cityProp from './city.prop';
import {ActionCreator} from '../../store/action';
import {useCitiesList} from '../../hooks/use-cities-list/useCitiesList';

function CitiesList(props) {
  const {
    list,
    currentCity,
    setCity,
  } = props;

  const [getTabClassName, handleClick] = useCitiesList(currentCity, setCity);

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
