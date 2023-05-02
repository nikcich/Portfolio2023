import { useColorMode, Flex, Spacer, Tooltip, IconButton, Show, Hide, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";


function mapRange(input) {
    return ((-0.00022*input*input) + (0.91*input));
}

function Header(options) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { setPage, scrollDiv, currPage } = options;

    const scrollSetPage = (pg) => {
        scrollDiv.current.scrollTo(0, 0);
        setTimeout(() => {
            setPage(pg);
        }, currPage == '/' ? 0 : mapRange(scrollDiv.current.scrollTop));
    }

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
                <DesktopHeader setPage={scrollSetPage} />
            </Hide>

            <Show below='md'>
                <MobileHeader setPage={scrollSetPage} />
            </Show>

        </Flex>
    );
}

export default Header;