import useSWRMutation from "swr/mutation";
import { apiClient } from "../../utils/api-client";

export const useUpdateTask = (body, id) => {
  return useSWRMutation(
    `/tasks/${id}`,
    (endpoint) => apiClient.apiPut(endpoint, body).then((result) => result),
  )
}