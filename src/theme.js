import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'League Spartan', sans-serif`,
    },
    breakpoints: createBreakpoints({
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    }),
    styles: {
        global: (props) => ({
            body: {
                transitionProperty: "all",
                transitionDuration: "normal",
                bg: mode('#E0E0E0', '#1a202c')(props),
            },
        }),
    },
    config: {
        disableTransitionOnChange: false,
        initialColorMode: "dark",
        useSystemColorMode: false,
    }
});

export default theme;