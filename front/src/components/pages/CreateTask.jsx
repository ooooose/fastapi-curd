import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePostTask } from "../../stores/useTasks/usePostTask";
import { 
    Button,
    FormControl,
    FormLabel,
    Input,
    Box } from "@chakra-ui/react";

const CreateTask = () => {
  const [task, setTask] = useState("")
  const body = {
    title: task,
    done: false,
  }
  const { data, trigger, isMutating } = usePostTask(body);
  const navigate = useNavigate();
  console.log(data);
  const submitTask = async () => {
    trigger();
    console.log(data);
    setTask('');
    navigate('/tasks');
  }

  return (
    <>
      <Box maxH="500px" maxW="960px" mx="auto">
        <Box p="10px" w={500}>
          <FormControl>
            <FormLabel>タスク内容</FormLabel>
            <Input
              placeholder="タスクを入力してください"
              type='text'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              />
          </FormControl>
          <Box float='right' display='flex' mt={3}>
            <Box mr='5px'>
              <Button colorScheme='teal' variant='solid'>
                <Link to="/tasks">
                  一覧に戻る
                </Link>
              </Button>
            </Box>
            <Box mr="5px">
              <Button 
                colorScheme='blue' 
                type="submit" 
                variant='solid' 
                onClick={submitTask} 
                isDisabled={task === '' ? true : false} 
                isLoading={isMutating} >
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