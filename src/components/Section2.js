import { Flex, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

const Section2 = ({}, ref) => {
    return (
        <Flex ref={ref} h='100vh' bg='pink.400' align='center' justify='center'>
            <Text color='whiteAlpha.800' fontSize='5xl'>Section 2</Text>
        </Flex>
    )
}

export default forwardRef(Section2);