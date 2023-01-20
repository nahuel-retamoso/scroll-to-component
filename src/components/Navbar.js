import { Button, Flex } from "@chakra-ui/react"

const navbar = ({click}) => {
    return (
        <Flex h='7vh' w='100%' bg='blackAlpha.400' justify='center' align='center' position='fixed'>
            <Button onClick={() => click("one")} mr='2%' colorScheme='blue'>Section1</Button>
            <Button onClick={() => click("two")} mr='2%' colorScheme='pink'>Section2</Button>
            <Button onClick={() => click("three")} mr='2%' colorScheme='green'>Section3</Button>
            <Button onClick={() => click("four")} mr='2%' colorScheme='facebook'>Section4</Button>
        </Flex>
    )
}

export default navbar;