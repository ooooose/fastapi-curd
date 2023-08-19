import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTask } from "../../lib/api/task";
import { 
    Button, 
    Box } from "@chakra-ui/react";
import Form from "../atoms/Form";

const CreateTask = () => {
  const [task, setTask] = useState("")
  const navigate = useNavigate();
  const submitTask = () => {
    const data = {
      title: task,
      done: false,
    }
    createTask(data);
    navigate('/tasks');
  }
  return (
    <>
      <Box maxH="500px" maxW="960px" mx="auto">
        <Box p="10px" w={500}>
          <Form  task={task} setTask={setTask}/>
          <Box float='right' display='flex'>
            <Box mr='5px'>
              <Button colorScheme='teal' variant='solid'>
                <Link to="/tasks">
                  一覧に戻る
                </Link>
              </Button>
            </Box>
            <Box mr="5px">
              <Button colorScheme='blue' variant='solid' onClick={submitTask} isDisabled={task === '' ? true : false} >
                新規作成
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CreateTask;