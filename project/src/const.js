export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
};

export const UrlMapPin = {
  DEFAULT: 'img/pin.svg',
  ACTIVE: 'img/pin-active.svg',
};

export const City = {
  PARIS: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  AMSTERDAM: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  COLOGNE: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  BRUSSELS: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  HAMBURG: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  DUSSELDORF: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
};

export const SortType = {
  POPULAR: {
    id: 1,
    title: 'Popular',
  },
  PRICE_LOW_TO_HIGH: {
    id: 2,
    title: 'Price: low to high',
  },
  PRICE_HIGH_TO_LOW: {
    id: 3,
    title: 'Price: high to low',
  },
  TOP_RATED_FIRST: {
    id: 4,
    title: 'Top rated first',
  },
};

export const APIRoute = {
  HOTELS: '/hotels',
};
