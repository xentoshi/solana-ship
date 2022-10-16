import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Container, Text, Heading, VStack, Button, HStack} from '@chakra-ui/react'
import { FC, MouseEventHandler, useCallback } from 'react'

const Disconnected: FC = () => {
    
    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        (event) => {
            if(event.defaultPrevented) return 
        },
        []
    )
    
    
    return (
        <Container>
            <VStack spacing={20}>
            <Heading color="black" as="h1" size="3xl" noOfLines={2} textAlign="center">
                Mint your toys. Earn $FUN. Level up.
            </Heading>
            <Button bgColor="accent" color="white" maxW="300px" onClick={handleClick}>
                <HStack>
                <Text>become childish</Text>
                <ArrowForwardIcon />
                </HStack>
            </Button>
            </VStack>
        </Container>
    )
}

export default Disconnected