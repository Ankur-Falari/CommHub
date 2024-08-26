import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

const OAuthButton: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gituser, gitloading, giterror] =
    useSignInWithGithub(auth);
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/Images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button
        variant="oauth"
        mb={2}
        isLoading={gitloading}
        onClick={() => signInWithGithub()}
      >
        Continue with GitHub
      </Button>
      {error && <Text> {error.message} </Text>}
      {giterror && <Text> {giterror.message} </Text>}
    </Flex>
  );
};
export default OAuthButton;
