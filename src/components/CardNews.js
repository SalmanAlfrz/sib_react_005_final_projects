import { Text, Box, Image, Button, HStack } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons';
import React from "react";


class CardNews extends React.Component {
    render() {
        const isSaved = this.props.status === "Save";
        let buttonSave
        if (isSaved) {
            buttonSave =
                <Button
                    onClick={this.props.handleDelete}
                    w="115px"
                    h="48px"
                    background="primary.200"
                    color="white"
                    outlineColor="primary.400"
                    _hover={{
                        background: "primary.300",
                        color: "white"
                    }}
                    p="0"
                >
                    <Text fontSize="lg">Saved <CheckCircleIcon marginBottom="4px" /></Text>
                </Button>
        } else {
            buttonSave =
                <Button
                    onClick={this.props.handleClick}
                    w="115px"
                    h="48px"
                    background="white"
                    color="black"
                    outlineColor="primary.400"
                    _hover={{
                        background: "primary.200",
                        color: "white"
                    }}
                >
                    <Text fontSize="lg">Save</Text>
                </Button>
        }

        

        return (
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image h="230px" w="100%" src={this.props.imageUrl} alt={this.props.imageAlt} />

                <Box p='6'>
                    <Box
                        display='flex'
                        alignItems='baseline'
                        noOfLines={1}
                    >
                        <Text fontSize="2xl" fontWeight={"bold"}>{this.props.title}</Text>
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={3}
                    >
                        {this.props.description}
                    </Box>

                    <Box display='flex' mt='4' alignItems='center'>
                        <Button
                            h="25px"
                            outlineColor="primary.400"
                            bg="white"
                        >
                            <Text>{this.props.category}</Text>
                        </Button>
                    </Box>

                    <Box display='flex' mt='5' alignItems='center'>
                        <HStack spacing={5} justify="space-between">
                            <Button
                                w="115px"
                                h="48px"
                                background="primary.400"
                                color="white"
                                outlineColor="primary.400"
                                _hover={{
                                    background: "primary.500",
                                }}
                                onClick={() => window.open(this.props.url, "_blank")}
                            >
                                <Text fontSize="lg">Read More</Text>
                            </Button>
                            {buttonSave}
                        </HStack>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default CardNews;