import useSWRMutation from "swr/mutation";
import { apiClient } from "../../utils/api-client";

export const usePostTask = (body) => {
  return useSWRMutation(
    '/tasks',
    (endpoint) => apiClient.apiPost(endpoint, body).then((result) => result),
  )
}