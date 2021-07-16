import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import cityProp from './city.prop';
import {setCity} from '../../store/action';
import {useCitiesList} from '../../hooks/use-cities-list/useCitiesList';
import {getCity} from '../../store/other/selectors';

function CitiesList(props) {
  const {
    list,
    currentCity,
    handleSetCity,
  } = props;

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

const mapStateToProps = (state) => ({
  currentCity: getCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleSetCity(city) {
    dispatch(setCity(city));
  },
});

CitiesList.propTypes = {
  list: PropTypes.arrayOf(cityProp),
  currentCity: cityProp,
  handleSetCity: PropTypes.func.isRequired,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
