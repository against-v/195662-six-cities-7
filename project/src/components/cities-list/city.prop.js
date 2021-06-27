import PropTypes from 'prop-types';
import locationProp from '../main-screen/location.prop';

export default PropTypes.shape({
  name: PropTypes.string,
  location: locationProp,
});
