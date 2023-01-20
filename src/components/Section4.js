import { Flex, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

const Section4 = ({}, ref) => {
    return (
        <Flex ref={ref} h='100vh' bg='blue.600' align='center' justify='center'>
            <Text color='whiteAlpha.800' fontSize='5xl'>Section 4</Text>
        </Flex>
    )
}

export default forwardRef(Section4);