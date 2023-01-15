import { useColorMode, Flex, Spacer, Tooltip, IconButton, Show, Hide, Box, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Heading } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaHome } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'


function MobileHeader(options) {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { setPage } = options;

    const btnRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure()

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

            <Tooltip label={"Menu"}>
                <IconButton ml={8} icon={<FiMenu />} onClick={onOpen}></IconButton>
            </Tooltip>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Flex flexDirection="column" gap="1rem" h="100%">

                            <span
                                className="textAnimations"
                                style={{
                                    backgroundImage: isDark ? "linear-gradient(#FFF 0 0)" : "linear-gradient(#000 0 0)"
                                }}
                                onClick={() => setPage('/')}
                            >Home</span>

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

                            <Spacer />

                            <Tooltip label={"GitHub"}>
                                <IconButton icon={<FaGithub />} isRound
                                    onClick={() => window.open('https://github.com/nikcich', '_blank')}
                                ></IconButton>
                            </Tooltip>


                            <Tooltip label={"LinkedIn"}>
                                <IconButton icon={<FaLinkedin />} isRound
                                    onClick={() => window.open('https://www.linkedin.com/in/nikolas-cichosz/', '_blank')}
                                ></IconButton>
                            </Tooltip>


                            <Tooltip label={isDark ? "Light Mode" : "Dark Mode"}>
                                <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound onClick={toggleColorMode}></IconButton>
                            </Tooltip>
                        </Flex>

                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileHeader;