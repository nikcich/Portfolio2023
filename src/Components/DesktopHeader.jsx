import { useColorMode, Flex, Spacer, Tooltip, IconButton, Show, Hide, Box } from "@chakra-ui/react";
import React from "react";
import { Heading } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

function DesktopHeader(options) {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { setPage } = options;

    return (
        <>
            <Heading
                ml={{ base: '0', md: '2', lg: "8", xl: "8" }}
                size={{ base: 'sm', md: 'lg', lg: "lg", xl: "lg" }}
                fontWeight="semibold"
                cursor="pointer"
                onClick={() => setPage('/')}
            >
                Nikolas Cichosz
            </Heading>

            <Spacer></Spacer>

            <span
                className="textAnimations"
                style={{
                    backgroundImage: isDark ? "linear-gradient(#FFF 0 0)" : "linear-gradient(#000 0 0)"
                }}
                onClick={() => setPage('/exp')}
            >Experience</span>

            <span
                className="textAnimations"
                style={{
                    backgroundImage: isDark ? "linear-gradient(#FFF 0 0)" : "linear-gradient(#000 0 0)"
                }}
                onClick={() => setPage('/projects')}
            >Projects</span>

            <Tooltip label={"GitHub"}>
                <IconButton ml={2} icon={<FaGithub />} isRound
                    onClick={() => window.open('https://github.com/nikcich/', '_blank')}
                ></IconButton>
            </Tooltip>


            <Tooltip label={"LinkedIn"}>
                <IconButton ml={2} icon={<FaLinkedin />} isRound
                    onClick={() => window.open('https://www.linkedin.com/in/nikolas-cichosz/', '_blank')}
                ></IconButton>
            </Tooltip>


            <Tooltip label={isDark ? "Light Mode" : "Dark Mode"}>
                <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound onClick={toggleColorMode}></IconButton>
            </Tooltip>
        </>
    )
}

export default DesktopHeader;