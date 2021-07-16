import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import locationProp from '../main-screen/location.prop';

import {UrlMapPin} from '../../const';

import useInteractiveMap from '../../hooks/use-interactiv-map/useInteractiveMap';

function InteractiveMap(props) {
  const {
    defaultLocation,
    points,
    activePointId,
  } = props;
  const mapRef = useRef(null);
  const map = useInteractiveMap(mapRef, defaultLocation);

  useEffect(() => {
    const markers = leaflet.layerGroup();
    if (map) {
      const defaultPin = leaflet.icon({
        iconUrl: UrlMapPin.DEFAULT,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
      });
      const activePin = leaflet.icon({
        iconUrl: UrlMapPin.ACTIVE,
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
            icon: activePointId === point.id ? activePin : defaultPin,
          },
        };
        leaflet.marker(marker.coords, marker.params).addTo(markers);
        markers.addTo(map);
      });
    }

    return () => {
      markers.clearLayers();
    };
  }, [map, points, activePointId]);

  return (
    <div
      id="map"
      style={{height: '100%'}}
      ref={mapRef}
    >

    </div>
  );
}

const mapStateToProps = ({OTHER}) => ({
  activePointId: OTHER.activeCardId,
});

InteractiveMap.propTypes = {
  defaultLocation: locationProp,
  points: PropTypes.arrayOf(PropTypes.shape({
    location: locationProp,
  })),
  activePointId: PropTypes.number,
};

export {InteractiveMap};
export default connect(mapStateToProps)(InteractiveMap);
