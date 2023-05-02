import { SlideFade } from "@chakra-ui/react";
import Projects from './Projects';
import { PageContext } from '../App';
import Experience from "./Experience";
import Home from "./Home";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    enter: {
        y: [4000, 0],
        transition: {
            duration: 1,
        }
    },
    exit: {
        y: -4000,
        transition: {
            duration: 1,
            type: "spring",
            damping: 10,
            stiffness: 60,
            restDelta: 0.001
        }
    }
};

function PageRouter(options) {
    const { setPage, rotate, setWindows } = options;

    return (
        <PageContext.Consumer>

            {page => {
                return (
                    <>
                        <motion.div
                            variants={variants}
                            animate={(page == '/') ? 'enter' : 'exit'}
                            style={{
                                position: "absolute", top: '0'
                            }}
                        >
                            <Home setPage={setPage} setWindows={setWindows} />
                        </motion.div>

                        <motion.div
                            variants={variants}
                            animate={(page == '/exp') ? 'enter' : 'exit'}
                            style={{
                                position: "absolute", top: '0',
                            }}
                        >
                            <Experience setWindows={setWindows} />
                        </motion.div>

                        <motion.div
                            variants={variants}
                            animate={(page == '/projects') ? 'enter' : 'exit'}
                            style={{
                                position: "absolute", top: '0',
                            }}
                        >
                            <Projects setWindows={setWindows} />
                        </motion.div>
                    </>
                );
            }}


        </PageContext.Consumer >
    );
}

export default PageRouter;