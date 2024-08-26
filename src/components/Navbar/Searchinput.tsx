import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

type SearchinputProps = {
  //user:
};

const Searchinput: React.FC<SearchinputProps> = () => {
  return (
    <Flex flexGrow={1} mr={2} align="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.400" mb="5px" />
        </InputLeftElement>
        <Input
          placeholder="Search CommHub"
          fontSize="10pt"
          _placeholder={{ color: "grey.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};
export default Searchinput;
