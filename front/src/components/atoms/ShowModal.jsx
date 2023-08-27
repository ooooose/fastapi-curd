import React, { useState } from "react";
import {Button,
        Text,
        Modal, 
        ModalOverlay, 
        ModalContent, 
        ModalHeader, 
        ModalCloseButton,
        ModalFooter,
        ModalBody,
        Input,
        useDisclosure} from "@chakra-ui/react";
import { useSWRConfig } from "swr";
import { apiClient } from "../../utils/api-client";

const putTask = async (id, body) => {
  await apiClient.apiPut(`/tasks/${id}`, body)
}

const ShowModal = ({ task }) => {
  const { mutate } = useSWRConfig();
  const [title, setTitle] = useState(task.title)
  const body = {
    title: title,
  }
  const submitTask = async () => {
    await putTask(task.id, body)
    mutate('/tasks');
    const newTitle = title
    setTitle((prev) => newTitle);
  }
  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter' || title.length === 0) return
    submitTask()
    onClose()
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <>
      <Text cursor={'pointer'} onClick={onOpen}>{task.title}</Text>
      <Modal 
        isOpen={isOpen} 
        onClose={() => {
          onClose()
          setTitle(task.title)
        }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>タスク「{task.title}」の編集</ModalHeader>
          <ModalBody>
            <Input
              placeholder="タスクを入力してください"
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              />
          </ModalBody>

          <ModalFooter>
            <Button 
              mr={3} 
              onClick={() => {
                onClose()
                setTitle(task.title)
              }}>
              キャンセル
            </Button>
            <Button 
              colorScheme='blue' 
              isDisabled={title === '' ? true : false}
              onClick={() => {
                submitTask()
                onClose()
              }}
              >更新する</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ShowModal;