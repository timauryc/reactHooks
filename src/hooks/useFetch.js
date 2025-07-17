
import { useEffect, useState} from 'react';

export function useFetch(fetchFnc, initialValue = []) {
    const [isFetching, setIsFetching] = useState(false);
    const [userData, setUserData] = useState(initialValue);
    const [error, setError] = useState();

    useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchFnc();
        console.log('places', places);
        setUserData(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, [fetchFnc]);

  return {
    isFetching,
    userData,
    error
  }
}