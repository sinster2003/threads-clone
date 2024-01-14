import { AddIcon } from "@chakra-ui/icons";
import {
    Box,
  Button,
  CloseButton,
  Flex,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaImages } from "react-icons/fa";
import useImageRender from "../utils/hooks/useImageRender";

const maxCharacters = 500; 

const CreatePost = () => {
  const [textArea, setTextArea] = useState("");
  const [maxChar, setMaxChar] = useState(maxCharacters);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getFilesToRead, imgUrl, setImgUrl } = useImageRender();
  const toast= useToast();
  const inputFile = useRef(null);

  const handleTextArea = (e) => {
    if(e.target.value.length > maxCharacters) {
        toast({
            title: "Limit Reached",
            description: "Cannot exceed 500 characters",
            status: "error",
            duration: 3000,
            isClosable: true
        })
    }
    else {
        setTextArea(e.target.value);
        setMaxChar(maxCharacters - e.target.value.length);
    }
  }

  const handleCloseModal = () => {
    onClose();
    setTextArea("");
    setMaxChar(maxCharacters);
    setImgUrl(null);
    inputFile.current.value = null; // to make sure same file can be selected again
  }

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        position="absolute"
        bottom={18}
        right={18}
        onClick={onOpen}
      >
        Post
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton top={4}/>

          <ModalBody>
            <Textarea placeholder="Write your mind out...✌️" fontSize="md" value={textArea} mb={3} onChange={handleTextArea}/>
            <Text color="whiteAlpha.800">{maxChar} / 500</Text>
            <Flex mt={4} flexDirection="column">
                <Input type="file" hidden ref={inputFile} onChange={getFilesToRead}/>
                <Icon as={FaImages} cursor="pointer" w={5} h={5} onClick={() => inputFile.current?.click()}/>
                {imgUrl && 
                <Flex gap={2} flexDirection="column" alignItems="flex-end">
                    <CloseButton onClick={() => {
                        setImgUrl(null);
                        inputFile.current.value = null;
                    }}/>
                    <Image src={imgUrl} alt="post-image"/>
                </Flex>
                }
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="ghost">Create Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;
