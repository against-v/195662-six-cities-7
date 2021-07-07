import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedroomCount: PropTypes.number.isRequired,
  adultMaxCount: PropTypes.number.isRequired,

  goods: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  host: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
});
