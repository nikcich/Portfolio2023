import { useColorMode, Flex, Spacer, Tooltip, IconButton, Show, Hide, Box } from "@chakra-ui/react";
import React from "react";
import { Heading } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header(options) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { setPage } = options;

    return (
        <Flex
            w="100vw" p={3}
            bg={isDark ? 'rgb(0,0,0, 0.1)' : 'rgb(255, 255, 255, 0.1)'} // 'rgb(0,0,0, 0.1)'
            position='sticky'
            top='0' zIndex={10}
            backdropFilter={"blur(5px)"}
            alignItems="center"
            flexDirection={{ base: 'row', md: 'row', lg: "row", xl: "row" }}
        >

            <Hide below='md'>
                <DesktopHeader setPage={setPage} />
            </Hide>

            <Show below='md'>
                <MobileHeader setPage={setPage} />
            </Show>

        </Flex>
    );
}

export default Header;