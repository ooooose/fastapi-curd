import React from "react";
import { Center, IconButton } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useSWRConfig } from "swr";
import { apiClient } from "../../utils/api-client";

const deleteTask = async (id) => {
  await apiClient.apiDelete(`/tasks/${id}`)
}

const DeleteButton = ({task}) => {
  const { mutate } = useSWRConfig();
  const handleDeleteTask = async () => {
    try {
      await deleteTask(task.id)
      mutate('/tasks');
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