import { useCallback } from 'react';
import useFetchBase from '@src/hooks/useFetchBase';
import { api } from '@src/lib/api';

const useFetch = () => {
  const willFetch = useCallback(async () => {
    const response = await api.aboutAPI.getAboutInfo(32);
    return response;
  }, []);
  const state = useFetchBase(willFetch);
  return state;
};

export default useFetch;
