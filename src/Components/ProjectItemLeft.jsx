import { useColorMode, Flex, Box, Text, Tag, TagLabel, TagLeftIcon, Spacer, Collapse, Button, Hide, Show, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { FaGithub } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs";

function ProjectItemLeft(props) {
    const { img, title, tags, content, git, demo, setWindows } = props;

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [more, setMore] = useState(false);

    return (
        <>

            <Hide below='md'>
                <Flex align='center'
                    h={{ base: '650px', md: '650px', lg: '420px', xl: '510px' }}
                    w={{ base: '90vw', md: '700px', lg: "850px", xl: "1100px" }}
                    direction={["column", "column", "column", "column"]}
                    position="relative"
                    marginTop={{ base: '25px', md: '50px', lg: '100px', xl: '100px' }}
                >
                    <Box
                        position={{ base: 'relative', md: 'relative', lg: "absolute", xl: "absolute" }}
                        align='flex-start'
                        borderWidth="1px"
                        filter="drop-shadow(0 0 0.5rem black)"

                        w={{ base: '90%', md: '90%', lg: "90%", xl: "82.5%" }}

                        borderBottomRightRadius={{ base: '0', md: '0', lg: "0.75rem", xl: "0.75rem" }}
                        borderBottomLeftRadius={{ base: '0', md: '0', lg: "0.75rem", xl: "0.75rem" }}
                        borderTopRightRadius={{ base: '0.75rem', md: '0.75rem', lg: "0.75rem", xl: "0.75rem" }}
                        borderTopLeftRadius={{ base: '0.75rem', md: '0.75rem', lg: "0.75rem", xl: "0.75rem" }}

                        borderBottomWidth={{ base: '0px', md: '0px', lg: "1px", xl: "1px" }}
                        bgImage={img} bgSize={"105%"}

                        right={{ base: '0px', md: '0', lg: '0px', xl: "0px" }}
                        top={{ base: '0px', md: '0px', lg: "0%", xl: "0%" }}
                        style={{ aspectRatio: '1920/1000' }}
                    />

                    <Box
                        position={{ base: 'relative', md: 'relative', lg: "absolute", xl: "absolute" }}
                        align='flex-start'
                        borderWidth="1px"
                        minH="175px" minW="325px"
                        bg={isDark ? "rgb(20, 20, 35, 0.8)" : "rgb(250, 250, 250, 0.8)"}
                        backdropFilter={"blur(15px)"}
                        filter="drop-shadow(0 0 0.5rem black)"

                        borderColor={isDark ? "rgb(255, 255, 255, 0.3)" : "rgb(0,0,0, 0.3)"}

                        w={{ base: '90%', md: '90%', lg: "400px", xl: "400px" }}
                        h={{ base: 'auto', md: 'auto', lg: "auto", xl: "auto" }}

                        left={{ base: '0px', md: '0', lg: '0px', xl: "0px" }}
                        top={{ base: '0px', md: '0px', lg: "50%", xl: "50%" }}
                        transform={{ base: '0px', md: '0px', lg: "translateY(-50%)", xl: "translateY(-50%)" }}

                        borderBottomRightRadius={{ base: '0.75rem', md: '0.75rem', lg: "0.75rem", xl: "0.75rem" }}
                        borderBottomLeftRadius={{ base: '0.75rem', md: '0.75rem', lg: "0.75rem", xl: "0.75rem" }}
                        borderTopRightRadius={{ base: '0', md: '0', lg: "0.75rem", xl: "0.75rem" }}
                        borderTopLeftRadius={{ base: '0', md: '0', lg: "0.75rem", xl: "0.75rem" }}
                        borderTopWidth={{ base: '0px', md: '0px', lg: "1px", xl: "1px" }}

                        zIndex="10" paddingTop={'1rem'} padding={'0.75rem'}
                    >
                        <Flex>
                            <Text fontSize='3xl' as='b'>{title}</Text>
                            <Spacer />

                            {git != undefined &&
                                <IconButton icon={<FaGithub />} isRound ml={2}
                                    onClick={() => window.open(git, '_blank')}
                                />
                            }

                            {demo != undefined &&
                                <IconButton icon={<BsDisplay />} isRound ml={2}
                                    // onClick={() => window.open(demo, '_blank')}
                                    onClick={() => setWindows((old) => {
                                        if (!old.includes(demo)) old = [...old, demo];
                                        return old;
                                    })}
                                />
                            }
                        </Flex>

                        <Spacer />

                        {tags.map((tag, idx) => {
                            return (
                                <Tag size='md' colorScheme={tag.color} borderRadius='full' key={idx} margin={'0.25rem'}>
                                    <TagLeftIcon as={tag.icon} />
                                    <TagLabel>{tag.name}</TagLabel>
                                </Tag>
                            )
                        })}

                        <Collapse startingHeight={50} in={more}>
                            {content}
                        </Collapse>

                        <Button onClick={() => setMore((old) => !old)}>{more ? 'Show Less' : 'Show More'}</Button>
                    </Box>
                </Flex>
            </Hide>

            <Show below='md'>
                <Flex align='center'
                    minH="300px"
                    w="90vw"
                    direction={["column", "column", "column", "column"]}
                    position="relative"
                    marginTop={{ base: '25px', md: '50px', lg: '100px', xl: '100px' }}
                    overflow="hidden"
                    borderRadius={"0.75rem"}
                    filter="drop-shadow(0 0 0.5rem black)"
                    borderColor={isDark ? "rgb(255, 255, 255, 0.3)" : "rgb(0,0,0, 0.3)"}
                    borderWidth="1px"
                >
                    <Box bgImage={img} bgSize={"105%"} w="100%" h="46vw" />

                    <Box
                        w="100%"
                        minH="50px"
                        borderColor={isDark ? "rgb(255, 255, 255, 0.3)" : "rgb(0,0,0, 0.3)"}
                        bg={isDark ? "rgb(20, 20, 35, 0.8)" : "rgb(250, 250, 250, 0.8)"}
                        backdropFilter={"blur(5px)"}
                        borderTopWidth={{ base: '0px', md: '0px', lg: "1px", xl: "1px" }}
                        p={3}
                    >
                        <Flex>
                            <Text fontSize='3xl' as='b'>{title}</Text>
                            <Spacer />

                            {git != undefined &&
                                <IconButton icon={<FaGithub />} isRound ml={2}
                                    onClick={() => window.open(git, '_blank')}
                                />
                            }

                            {demo != undefined &&
                                <IconButton icon={<BsDisplay />} isRound ml={2}
                                    onClick={() => window.open(demo, '_blank')}
                                />
                            }
                        </Flex>

                        <Spacer />

                        {tags.map((tag, idx) => {
                            return (
                                <Tag size='md' colorScheme={tag.color} borderRadius='full' key={idx} margin={'0.25rem'}>
                                    <TagLeftIcon as={tag.icon} />
                                    <TagLabel>{tag.name}</TagLabel>
                                </Tag>
                            )
                        })}

                        <Collapse startingHeight={50} in={more}>
                            {content}
                        </Collapse>

                        <Button onClick={() => setMore((old) => !old)}>{more ? 'Show Less' : 'Show More'}</Button>
                    </Box>
                </Flex>
            </Show>



        </>
    );
}

export default ProjectItemLeft;