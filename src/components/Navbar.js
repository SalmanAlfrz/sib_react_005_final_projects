import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button, Stack, Input } from "@chakra-ui/react";
import { Search2Icon } from '@chakra-ui/icons';
import Logo from "./Logo";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { searchAdded } from "../features/searchSlice";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="110px"
        color="white"
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuLinks = ({ isOpen }) => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  

  const onClickedSearch = () => {
    dispatch(
      searchAdded(searchTerm)
    )
  }


  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={2}
        align="center"
        justify="center"
        direction={["column", "row"]}
        pt={[4, 0]}
      >
        {/* Search Bar */}
        <Stack spacing={2} direction="row" align="center" justify={"center"}>
          <Input
            value={searchTerm}
            onChange={e=>setSearchTerm(e.target.value)}
            placeholder="Search"
            color="black"
            bg="white"
            w={["300px", "400px"]}
            rounded="full"
          />
          <Link to="/search">
            <Button
              variant="solid"
              rounded={"full"}
              color="white"
              bg="primary.200"
              _hover={{
                bg: "primary.300"
              }}
              onClick={()=>onClickedSearch()}
            >
              <Search2Icon />
            </Button>
          </Link>
        </Stack>
        {/* end of Search Bar */}

        {/* Saved Button */}
        <Link to="/saved">
          <Button
            rounded="full"
            color="white"
            bg="primary.200"
            _hover={{
              bg: "primary.300"
            }}
          >
            Saved
          </Button>
        </Link>
        {/* end of Saved Button */}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={5}
      bg="primary.100"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;