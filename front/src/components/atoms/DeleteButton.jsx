import React from "react";
import { Center, IconButton } from "@chakra-ui/react";
import { useSWRConfig } from "swr";
import { apiClient } from "../../utils/api-client";
import { CheckIcon } from "@chakra-ui/icons";

const deleteTask = async (id) => {
  const endpoint = `/tasks/${id}`;
  await apiClient.deleteTask(endpoint).then((result) => {console.log(result)});
}

const DeleteButton = ({task}) => {
  const { mutate } = useSWRConfig();
  const handleDeleteTask = async () => {
    try {
      await mutate("/tasks", deleteTask(task.id), {
        optimisticData: (tasks) =>
          tasks.filter((t) => t.id !== task.id),
        revalidate: true,
        throwOnError: true,
      });
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <>
      <Center>
        <IconButton
            size="sm"
            aria-label="Delete Task"
            colorScheme="gray"
            icon={<CheckIcon />}
            onClick={handleDeleteTask}
          />
      </Center>
    </>
  )
}

export default DeleteButton;