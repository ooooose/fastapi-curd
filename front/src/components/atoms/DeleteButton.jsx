import React from "react";
import { Center, IconButton } from "@chakra-ui/react";
import { useDeleteTask } from "../../stores/useTasks/useDeleteTask";
import { CheckIcon } from "@chakra-ui/icons";

const DeleteButton = ({task, mutate}) => {
  const { trigger } = useDeleteTask(task.id);
  const handleDeleteTask = async () => {
    try {
      trigger();
      mutate();
      console.log(mutate)
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