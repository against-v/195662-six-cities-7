export const useCitiesList = (currentCity, setCity) => {
  const getTabClassName = (city) => {
    const className = 'locations__item-link tabs__item';
    return `${className} ${city.name === currentCity.name ? 'tabs__item--active' : ''}`;
  };
  const handleClick = (e, city) => {
    e.preventDefault();
    setCity(city);
  };

  return [getTabClassName, handleClick];
};
