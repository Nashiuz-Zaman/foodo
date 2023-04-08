//react
import { useState, useEffect } from 'react';

//hooks
import useFetch from './useFetch';

//data
import { reviewsApi } from '../data/ApiInformation';

export default function useFetchReviews() {
  const { getData } = useFetch();
  const [data, setData] = useState(undefined);
  const [isPending, setIsPending] = useState(true); // at first it's pending since it's async
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(reviewsApi)
      .then((response) => {
        // successful response, so isPending should be false
        setIsPending(false);

        // set fooditems = data received
        if (response.data.success) {
          setData(response.data.data);
        } else {
          setError('Something went wrong with the request');
        }
      })
      .catch((error) => {
        // failed response, so isPending should be false
        setIsPending(false);

        // set error = error.message
        setError('Something went wrong with the request');
      });
  }, [getData]);

  return { data, isPending, error };
}
