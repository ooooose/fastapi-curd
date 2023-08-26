import React, { useState } from "react";
import { usePostTask } from "../../stores/useTasks/usePostTask";
import { 
    Button,
    FormControl,
    FormLabel,
    Input,
    Box, 
    Flex} from "@chakra-ui/react";

const CreateForm = () => {
  const [task, setTask] = useState("")
  const body = {
    title: task,
  }
  const { data, trigger, isMutating } = usePostTask(body);
  const submitTask = async () => {
    trigger();
    console.log(data);
    setTask('');
  }
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter' || task.length === 0) return
    submitTask()
  }


  return (
    <>
      <Box maxH="500px" maxW="960px" mx="auto">
        <FormControl>
          <FormLabel>タスク内容</FormLabel>
          <Flex gap={2}>
            <Input
              placeholder="タスクを入力してください"
              type='text'
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyDown}
              />
            <Button 
              colorScheme='blue' 
              type="submit" 
              variant='solid' 
              onClick={() => {
                submitTask()
              }} 
              isDisabled={task === '' ? true : false} 
              isLoading={isMutating} >
              新規作成
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </>
  )
}

export default CreateForm;