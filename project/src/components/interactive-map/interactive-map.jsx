import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import locationProp from '../main-screen/location.prop';

import {UrlMapPin} from '../../const';

import useInteractiveMap from '../../hooks/use-interactiv-map/useInteractiveMap';

function InteractiveMap({defaultLocation, points}) {
  const mapRef = useRef(null);
  const map = useInteractiveMap(mapRef, defaultLocation);

  useEffect(() => {
    const markers = leaflet.layerGroup();
    if (map) {
      // const markers = leaflet.layerGroup().addTo(map);
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
        leaflet.marker(marker.coords, marker.params).addTo(markers);
        markers.addTo(map);
      });
    }

    return () => {
      markers.clearLayers();
    };
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
  defaultLocation: locationProp,
  points: PropTypes.arrayOf(PropTypes.shape({
    location: locationProp,
  })),
};

export default InteractiveMap;
