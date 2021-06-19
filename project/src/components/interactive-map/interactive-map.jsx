import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {UrlMapPin} from '../../const';

import useInteractiveMap from '../../hooks/use-interactiv-map/useInteractiveMap';

function InteractiveMap({defaultLocation, points}) {
  const mapRef = useRef(null);
  const map = useInteractiveMap(mapRef, defaultLocation);

  useEffect(() => {
    if (map) {
      const defaultPin = leaflet.icon({
        iconUrl: UrlMapPin.DEFAULT,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      });
      points.forEach((point) => {
        const marker = {
          coords: {
            lat: point.location.latitude,
            lng: point.location.longitude,
          },
          params: {
            icon: defaultPin,
          },
        };
        leaflet.marker(marker.coords, marker.params).addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div
      id="map"
      style={{height: '100%'}}
      ref={mapRef}
    >

    </div>
  );
}

InteractiveMap.propTypes = {
  defaultLocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  points: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
  })),
};

export default InteractiveMap;
