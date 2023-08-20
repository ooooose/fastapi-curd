import useSWRMutation from "swr/mutation";
import { apiClient } from "../../utils/api-client";

export const useDeleteTask = (taskId) => {
  return useSWRMutation(
    `/tasks/${taskId}`,
    (endpoint) => apiClient.apiDelete(endpoint).then((result) => result),
    { revalidate: false }
  )
}