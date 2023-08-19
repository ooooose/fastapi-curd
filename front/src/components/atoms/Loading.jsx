import React from "react";
import { CircularProgress } from "@chakra-ui/react";


const Loading = () => {
  return (
    <>
      <CircularProgress value={59} size='100px' thickness='4px' />
    </>
  )
}

export default Loading;