import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Searchinput from "./Searchinput";
import RightContent from "./RightContent/RightContent";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" border="1px solid blue" padding="6px 12px">
      <Flex align="center">
        <Image src="/Images/redditface.svg" height="30px" />
        <Image
          src="/Images/redditText.svg"
          height="44px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <Searchinput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
