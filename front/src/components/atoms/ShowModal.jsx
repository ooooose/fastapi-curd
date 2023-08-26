import React from "react";
import {Button,
        Text,
        Modal, 
        ModalOverlay, 
        ModalContent, 
        ModalHeader, 
        ModalCloseButton,
        ModalFooter,
        ModalBody,
        useDisclosure} from "@chakra-ui/react";


const ShowModal = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <>
      <Text cursor={'pointer'} onClick={onOpen}>{title}</Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              あああああああああああああああああああああああああああ
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              キャンセル
            </Button>
            <Button colorScheme='blue'>更新する</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ShowModal;