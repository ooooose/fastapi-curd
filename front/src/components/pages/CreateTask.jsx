import React from "react";
import { Link } from "react-router-dom";
import { 
    Button, 
    Box, 
    Text, 
    FormControl,
    FormLabel,
    Input,
    FormHelperText } from "@chakra-ui/react";

const CreateTask = () => {

  return (
    <>
      <Box maxH="500px" maxW="960px" mx="auto">
        <Box p="10px">
          <Text fontSize='50px' color='blue'>
            タスク新規作成
          </Text>
          <FormControl>
            <FormLabel>タスク内容</FormLabel>
              <Input type='text' />
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
              <Button colorScheme='blue' variant='solid'>
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