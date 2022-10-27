import React from "react";
import { Flex, Button, Stack, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = (props) => {
    const location = useLocation()
    return (
        <NavBarContainer {...props}>
            <MenuLinks url={location.pathname} />
        </NavBarContainer>
    );
};

const MenuLinks = ({ url }) => {
    const search = useSelector((state) => state.search)

    function capitalizeFirstLetter(str) {

        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }
    if (url === "/") {
        return (
            <Stack
                spacing={["10px", "120px"]}
                align="center"
                justify="center"
                direction={["column", "row"]}

            >
                {/* Navigate Button */}
                <Link to="/indonesia">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        backgroundImage={require("../images/indonesia.jpg")}
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Indonesia</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
                {/* Navigate Button */}
                <Link to="/programming">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        backgroundImage={require("../images/programming.jpg")}
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Programming</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
                {/* Navigate Button */}
                <Link to="/covid">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        backgroundImage={require("../images/covid.jpg")}
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Covid-19</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
            </Stack>
        );
    } else if (url === "/indonesia") {
        return (
            <Stack
                spacing={["10px", "120px"]}
                align="center"
                justify="center"
                direction={["column", "row"]}

            >
                {/* Navigate Button */}
                <Link to="/indonesia">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        bg="linear-gradient(#FF731D, #1D34FFCF)"
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Indonesia</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
                {/* Navigate Button */}
                <Link to="/programming">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        backgroundImage={require("../images/programming.jpg")}
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Programming</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
                {/* Navigate Button */}
                <Link to="/covid">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        backgroundImage={require("../images/covid.jpg")}
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Covid-19</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
            </Stack>
        );
    } else if (url === "/programming") {
        return (
            <Stack
                spacing={["10px", "120px"]}
                align="center"
                justify="center"
                direction={["column", "row"]}

            >
                {/* Navigate Button */}
                <Link to="/indonesia">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        backgroundImage={require("../images/indonesia.jpg")}
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Indonesia</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
                {/* Navigate Button */}
                <Link to="/programming">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        bg="linear-gradient(#FF731D, #1D34FFCF)"
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Programming</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
                {/* Navigate Button */}
                <Link to="/covid">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        backgroundImage={require("../images/covid.jpg")}
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Covid-19</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
            </Stack>
        );
    } else if (url === "/covid") {
        return (
            <Stack
                spacing={["10px", "120px"]}
                align="center"
                justify="center"
                direction={["column", "row"]}

            >
                {/* Navigate Button */}
                <Link to="/indonesia">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        backgroundImage={require("../images/indonesia.jpg")}
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Indonesia</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
                {/* Navigate Button */}
                <Link to="/programming">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        backgroundImage={require("../images/programming.jpg")}
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Programming</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
                {/* Navigate Button */}
                <Link to="/covid">
                    <Button
                        w="225px"
                        h="60px"
                        rounded="10"
                        color="white"
                        bg="linear-gradient(#FF731D, #1D34FFCF)"
                        backgroundBlendMode="multiply"
                        _hover={{
                            bg: "linear-gradient(#FF731D, #1D34FFCF)"
                        }}
                    >
                        <Text fontSize="20px" textShadow="2px 2px black">Covid-19</Text>
                    </Button>
                </Link>
                {/* end of Navigate Button */}
            </Stack>
        );
    } else if (url === "/saved") {
        return (
            <Stack spacing={8}>
                <Stack
                    spacing={["10px", "120px"]}
                    align="center"
                    justify="center"
                    direction={["column", "row"]}

                >
                    <Text fontSize="4xl" fontWeight="bold">Saved Pages</Text>
                </Stack>

                <Stack
                    spacing={["10px", "120px"]}
                    align="center"
                    justify="center"
                    direction={["column", "row"]}

                >
                    {/* Navigate Button */}
                    <Link to="/indonesia">
                        <Button
                            w="225px"
                            h="60px"
                            rounded="10"
                            color="white"
                            backgroundImage={require("../images/indonesia.jpg")}
                            backgroundBlendMode="multiply"
                            _hover={{
                                bg: "linear-gradient(#FF731D, #1D34FFCF)"
                            }}
                        >
                            <Text fontSize="20px" textShadow="2px 2px black">Indonesia</Text>
                        </Button>
                    </Link>
                    {/* end of Navigate Button */}
                    {/* Navigate Button */}
                    <Link to="/programming">
                        <Button
                            w="225px"
                            h="60px"
                            rounded="10"
                            color="white"
                            backgroundImage={require("../images/programming.jpg")}
                            backgroundBlendMode="multiply"
                            _hover={{
                                bg: "linear-gradient(#FF731D, #1D34FFCF)"
                            }}
                        >
                            <Text fontSize="20px" textShadow="2px 2px black">Programming</Text>
                        </Button>
                    </Link>
                    {/* end of Navigate Button */}
                    {/* Navigate Button */}
                    <Link to="/covid">
                        <Button
                            w="225px"
                            h="60px"
                            rounded="10"
                            color="white"
                            backgroundImage={require("../images/covid.jpg")}
                            backgroundBlendMode="multiply"
                            _hover={{
                                bg: "linear-gradient(#FF731D, #1D34FFCF)"
                            }}
                        >
                            <Text fontSize="20px" textShadow="2px 2px black">Covid-19</Text>
                        </Button>
                    </Link>
                    {/* end of Navigate Button */}
                </Stack>
            </Stack>
        );
    } else if (url === "/about") {
        return (
            <>
                <Stack spacing={8}>
                    <Stack
                        spacing={["10px", "120px"]}
                        align="center"
                        justify="center"
                        direction={["column", "row"]}
                    >
                        <Text fontSize="4xl" fontWeight="bold">About Pages</Text>
                    </Stack>
                </Stack>
            </>
        )
    }
    else if (url === "/search") {
        return (
            <>
                <Stack spacing={8}>
                    <Stack
                        spacing={["10px", "120px"]}
                        align="center"
                        justify="center"
                        direction={["column", "row"]}

                    >
                        <Text fontSize="4xl" fontWeight="bold">{capitalizeFirstLetter(search.search)} Pages</Text>
                    </Stack>

                    <Stack
                        spacing={["10px", "120px"]}
                        align="center"
                        justify="center"
                        direction={["column", "row"]}

                    >
                        {/* Navigate Button */}
                        <Link to="/indonesia">
                            <Button
                                w="225px"
                                h="60px"
                                rounded="10"
                                color="white"
                                backgroundImage={require("../images/indonesia.jpg")}
                                backgroundBlendMode="multiply"
                                _hover={{
                                    bg: "linear-gradient(#FF731D, #1D34FFCF)"
                                }}
                            >
                                <Text fontSize="20px" textShadow="2px 2px black">Indonesia</Text>
                            </Button>
                        </Link>
                        {/* end of Navigate Button */}
                        {/* Navigate Button */}
                        <Link to="/programming">
                            <Button
                                w="225px"
                                h="60px"
                                rounded="10"
                                color="white"
                                backgroundImage={require("../images/programming.jpg")}
                                backgroundBlendMode="multiply"
                                _hover={{
                                    bg: "linear-gradient(#FF731D, #1D34FFCF)"
                                }}
                            >
                                <Text fontSize="20px" textShadow="2px 2px black">Programming</Text>
                            </Button>
                        </Link>
                        {/* end of Navigate Button */}
                        {/* Navigate Button */}
                        <Link to="/covid">
                            <Button
                                w="225px"
                                h="60px"
                                rounded="10"
                                color="white"
                                backgroundImage={require("../images/covid.jpg")}
                                backgroundBlendMode="multiply"
                                _hover={{
                                    bg: "linear-gradient(#FF731D, #1D34FFCF)"
                                }}
                            >
                                <Text fontSize="20px" textShadow="2px 2px black">Covid-19</Text>
                            </Button>
                        </Link>
                        {/* end of Navigate Button */}
                    </Stack>
                </Stack>
            </>
        );
    }

};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="center"
            wrap="wrap"
            w="100%"
            mb={["10px", "50px"]}
            p={5}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default Navigation;