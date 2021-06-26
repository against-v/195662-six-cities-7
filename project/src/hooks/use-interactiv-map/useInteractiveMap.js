import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useInteractiveMap(mapRef, defaultLocation) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: defaultLocation.latitude,
          lng: defaultLocation.longitude,
        },
        zoom: defaultLocation.zoom,
        zoomControl: false,
        marker: true,
      });

      const layer = {
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        params: {
          attribution: '&copy; <a href="">OpenStreetMap</a> contributors &copy; <a href="">CARTO</a>',
        },
      };

      leaflet.tileLayer(layer.url, layer.params).addTo(instance);

      setMap(instance);
    }

    //todo я не очень понимаю, почему у меня map !== null после 5 строки, поэтому дописал еще одно условие, чтобы обновлялась карта
    if (map) {
      map.setView({
        lat: defaultLocation.latitude,
        lng: defaultLocation.longitude,
      }, defaultLocation.zoom);
    }

  }, [mapRef, defaultLocation, map]);

  return map;
}

export default useInteractiveMap;
