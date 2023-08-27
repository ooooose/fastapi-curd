import React from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { Box, Text, Button } from '@chakra-ui/react'
const fetcher = (url) => axios.get(url).then(res => res.data)

const Swr = () => {
  const before = performance.now();
  const { data: tasks } = useSWR('http://localhost:8000/tasks', fetcher)
  if (!tasks) return <>...loading</>
  const after = performance.now();
  console.log("処理時間は、" + (after - before) + "ミリ秒です");
	return (
    <>
      <Box flexDirection='column'>
        <Box>
          { tasks.map((task) => (
            <Text key={task.id}>{task.title}</Text>
          ))}
        </Box>
        <Button onClick={() => {window.location.reload()}}>リロード</Button>
      </Box>
		</>
	)
} 

export default Swr;