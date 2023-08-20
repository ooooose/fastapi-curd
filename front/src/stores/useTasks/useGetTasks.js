import useSWR from 'swr';

import { apiClient } from '../../utils/api-client';

export const useGetTasks = () => {
  return useSWR(
    '/tasks',
    (endpoint) => apiClient.apiGet(endpoint).then((result) => result.data),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};