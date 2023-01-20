import { Flex, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

const Section3 = ({}, ref) => {
    return (
        <Flex ref={ref} h='100vh' bg='green.400' align='center' justify='center'>
            <Text color='whiteAlpha.800' fontSize='5xl'>Section 3</Text>
        </Flex>
    )
}

export default forwardRef(Section3);