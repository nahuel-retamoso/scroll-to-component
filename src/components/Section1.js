import { Flex, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

const Section1 = ({}, ref) => {
    return (
        <Flex  as='div' ref={ref} h='100vh' bg='blue.400' align='center' justify='center'>
            <Text color='whiteAlpha.800' fontSize='5xl'>Section 1</Text>
        </Flex>
    )
}

export default forwardRef(Section1);