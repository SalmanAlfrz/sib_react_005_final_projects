import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link as Direct } from 'react-router-dom';

export default function LargeWithNewsletter() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
            mt={10}
        >
            <Container maxW={'6xl'} py={10}>
                <SimpleGrid>
                    <Stack align={'flex-start'} marginLeft={["0","-180px"]}>
                        <Direct to="/about"><Text fontWeight={'500'} fontSize={'lg'} mb={2}>
                            About Us
                        </Text></Direct>
                        <Link href={'#'}>Moh. Aulia Miftakhurahmat - Desainer UI UX</Link>
                        <Link href={'#'}>Effendi Prakoso -  Intergrasi Data</Link>
                        <Link href={'#'}>Salman Alfarizi - Intergrasi UI UX</Link>
                        <Text fontSize={'sm'} pt={3}>
                            © 2022 Final Project. Group 4
                        </Text>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}