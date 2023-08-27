import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Text, Button } from '@chakra-ui/react'


const Axios = () => {
  const [loading, setLoading] = useState(true)
  const [tasks, setTasks] = useState()
	useEffect(() => {
    const before = performance.now();
		axios.get('http://localhost:8000/tasks').then(res => {
      setTasks(res.data)
      setLoading(false)
      const after = performance.now();
      console.log("処理時間は、" + (after - before) + "ミリ秒です");
    }).catch((err) => {
      console.log(err)
    })
	}, [])
  if (loading) return <>...loading</>
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

export default Axios;