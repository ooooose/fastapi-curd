import React from "react";
import { useGetTasks } from "../../stores/useTasks/useGetTasks";
import { Link } from "react-router-dom";
import Loading from "../atoms/Loading";

import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const Task = () => {
  const { data: tasks } = useGetTasks();
  if (!tasks) return <Loading />

  return (
    <>
      <Box maxH="500px" maxW="960px" mx="auto">
        <Button colorScheme='teal' variant='solid'>
          <Link to="/tasks/create">
            新規作成
          </Link>
        </Button>
        <TableContainer>
          <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>タイトル</Th>
                  <Th>完了する（削除）</Th>
                </Tr>
              </Thead>
              { tasks.map((item, index) => (
                <Tbody key={item.id}>
                  <Tr>
                    <Td>{index + 1}</Td>
                    <Td>{item.title}</Td>
                  </Tr>
                </Tbody>
              ))}
          </Table>
        </TableContainer>  
      </Box>
    </>
  )
}

export default Task;