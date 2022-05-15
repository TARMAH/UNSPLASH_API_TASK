import { useEffect, useState } from 'react';
import { searchPhotos } from '../utils/searchPhotos';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const [pageNumber, setpageNumber] = useState(1);

  const fetchApi = async () => {
    setLoading(true);
    await searchPhotos({ query, pageNumber }).then(response => {
      setData(response);
      setLoading(false);
    });
  };

  useEffect(() => {
    // restrict query to more than 2 characters
    if (query.length > 2) {
      fetchApi();
    }
  }, [query, pageNumber]);

  return { loading, data, setQuery, setpageNumber, pageNumber };
};

export default useApi;
