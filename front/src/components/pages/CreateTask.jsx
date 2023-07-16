import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createTask } from "../../lib/api/task";
import { 
    Button, 
    Box, 
    Text, 
    FormControl,
    FormLabel,
    Input,
    FormHelperText } from "@chakra-ui/react";

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
  console.log(task)
  return (
    <>
      <Box maxH="500px" maxW="960px" mx="auto">
        <Box p="10px">
          <Text fontSize='50px' color='blue'>
            タスク新規作成
          </Text>
          <FormControl>
            <FormLabel>タスク内容</FormLabel>
              <Input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
            <FormHelperText>タスクの内容を記載してください</FormHelperText>
          </FormControl>
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