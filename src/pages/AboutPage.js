import { Grid, Box, Badge, Avatar, Container } from "@chakra-ui/react";

const property = [{
    name: "Effendi Prakoso",
    code: "RCTN-KS05-016",
    imageUrl: require("../images/Effendi.jpg"),
    title: 'Bertugas untuk Integrasi data API'
},
{
    name: "Salman Alfarizi",
    code: "RCTN-KS05-018",
    imageUrl: require("../images/salman.jpg"),
    title: 'Bertugas untuk Integrasi UI UX'
},
{
    name: "Moh. Aulia Miftakhurahmat",
    code: "RCTN-KS05-021",
    imageUrl: require("../images/miftah.jpg"),
    title: 'Bertugas untuk mendesain UI UX'
},]

const AboutPage = () => {

    return (
        <Container maxW={'6xl'} py={10}>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={6}>
                {
                    property.map((item, index) => (
                        <Box maxW='sm' textAlign={"center"} overflow='hidden' key={index}>
                            <Avatar size='2xl' name={item.name} src={item.imageUrl} />
                            <Box p='10'>
                                <Box alignItems='baseline'>
                                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                                        {item.name}
                                    </Badge>
                                    <Box
                                        color='gray.500'
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        textTransform='uppercase'
                                        ml='2'
                                    >
                                        {item.code}
                                    </Box>
                                </Box>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                    textAlign="center"
                                >
                                    {item.title}
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Grid>
        </Container>
    );

}

export default AboutPage;