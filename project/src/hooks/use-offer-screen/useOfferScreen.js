import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

export const useOfferScreen = (getData, resetData) => {
  const {id} = useParams();

  useEffect(() => {
    getData(id);
    return () => {
      resetData();
    };
  }, [getData, id, resetData]);
};
