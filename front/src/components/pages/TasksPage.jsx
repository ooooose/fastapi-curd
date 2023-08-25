import React from "react";
import { useGetTasks } from "../../stores/useTasks/useGetTasks";
import Loading from "../atoms/Loading";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Center,
} from '@chakra-ui/react'
import DeleteButton from "../atoms/DeleteButton";
import CreateForm from "../atoms/CreateForm";

const Task = () => {
  const { data: tasks } = useGetTasks();
  if (!tasks) return <Loading />

  return (
    <>
      <Box maxH="100vh" maxW="960px" mx="auto">
        <Box mb={5} >
          <CreateForm />
              {tasks.length !== 0 
              ? 
              (
                <>
                <TableContainer>
                  <Table variant='simple'>
                      <Thead>
                        <Tr>
                          <Th>ID</Th>
                          <Th w={'200px'}>タイトル</Th>
                          <Th>完了する（削除）</Th>
                        </Tr>
                      </Thead>
                      { tasks.map((item, index) => (
                        <Tbody key={item.id}>
                          <Tr>
                            <Td>{index + 1}</Td>
                            <Td>{item.title}</Td>
                            <Td><DeleteButton task={item} /></Td>
                          </Tr>
                        </Tbody>
                      ))}
                      </Table>
                    </TableContainer>  
              </>
              ) : (
                <>
                <Center>
                  
                  <Text>タスクはありません！</Text>
                </Center>
              </>
              )}
        </Box>
      </Box>
    </>
  )
}

export default Task;