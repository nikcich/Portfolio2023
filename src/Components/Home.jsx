import { Flex, useColorMode, Avatar, Heading, IconButton, } from "@chakra-ui/react";
import stnik from '../assets/stnikf1.png';
import { BsArrowDown } from 'react-icons/bs';

function Home(options) {
    const { setPage } = options;
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <>
            <Flex
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                h="85vh"
            >

                <Avatar size='2xl' name='Nikolas Cichosz' src={stnik}
                    h="30vh" w="30vh"
                />
                <br></br>
                <Heading textAlign={"center"}>Nikolas Cichosz</Heading>
                <br></br>
                <Heading textAlign={"center"}>Software Engineer, Full Stack Developer</Heading>
                <br></br><br></br><br></br>
                <IconButton
                    fontSize='5rem' h="5rem" w="3rem" icon={<BsArrowDown />} isRound
                    bg={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}
                    onClick={() => setPage('/exp')}
                />
            </Flex>
        </>
    );
}

export default Home;