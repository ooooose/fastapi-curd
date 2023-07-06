import React, { useEffect, useReducer } from "react";
import { fetchTasks } from "../../lib/api/task";

import {
  initialState,
  tasksActionTypes,
  tasksReducer,
} from '../../reducers/tasks';

import {
  Text,
  Box,
  CircularProgress,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import { REQUEST_STATE } from "../../constants";

const Task = () => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  useEffect(() => {
    dispatch({ type: tasksActionTypes.FETCHING });
    fetchTasks()
    .then((data) => dispatch({
      type: tasksActionTypes.FETCH_SUCCESS,
      payload: {
        tasks: data,
      }
    }))
  }, [])
  return (
    <>
      <Box maxH="500px" maxW="960px" mx="auto">
        <Box p="10px">
          <Text fontSize='50px' color='blue'>
            タスク進捗管理表
          </Text>
        </Box>
        <TableContainer>
          <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>タイトル</Th>
                  <Th>完了/未完了</Th>
                </Tr>
              </Thead>
              {
                state.fetchState === REQUEST_STATE.LOADING ?
                  <>
                    <Box mx='auto'>
                      <CircularProgress value={80} />
                    </Box>
                  </>
                :
                  state.tasksList.map((item, index) =>
                    <>
                      <Tbody>
                        <Tr key={index}>
                          <Td>{index + 1}</Td>
                          <Td>{item.title}</Td>
                          <Td>{item.done === true ? '完了' : '未完了'}</Td>
                        </Tr>
                      </Tbody>
                    </>
                  )
                }
          </Table>
        </TableContainer>  
      </Box>
    </>
  )
}

export default Task;