import React, { memo } from "react";
import { Button } from '@chakra-ui/react';

export const button = memo(({props}) => {
  return (
    <>
      <Button colorScheme='blue'>{props.children}</Button>
    </>
  )
});