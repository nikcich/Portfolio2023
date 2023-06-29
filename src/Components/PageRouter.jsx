import { SlideFade } from "@chakra-ui/react";
import Projects from './Projects';
import { PageContext } from '../App';
import Experience from "./Experience";
import Home from "./Home";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    enter: {
        y: ["100%", "100%", "0%"],
        scale: ["25%", "100%"],
        transition: {
            duration: 1,
        }
    },
    exit: {
        y: ["0%","0%","-100%"],
        scale: ["100%", "60%", "25%"],
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
                    <div style={{
                        position: 'relative', height: '100%', width: '100vw',
                        display: 'flex', flexDirection: 'column', alignItems: 'center'
                    }}>
                        <motion.div
                            variants={variants}
                            animate={(page == '/') ? 'enter' : 'exit'}
                            initial={{ y: '-100%' }}
                            style={{
                                position: "absolute", zIndex: '100'
                            }}
                        >
                            <Home setPage={setPage} setWindows={setWindows} />
                        </motion.div>

                        <motion.div
                            variants={variants}
                            animate={(page == '/exp') ? 'enter' : 'exit'}
                            initial={{ y: '-100%' }}
                            style={{
                                position: "absolute"
                            }}
                        >
                            <Experience setWindows={setWindows} />
                        </motion.div>


                        <motion.div
                            variants={variants}
                            animate={(page == '/projects') ? 'enter' : 'exit'}
                            initial={{ y: '-100%' }}
                            style={{
                                position: "absolute"
                            }}
                        >
                            <Projects setWindows={setWindows} />
                        </motion.div>
                    </div>
                );
            }}


        </PageContext.Consumer >
    );
}

export default PageRouter;