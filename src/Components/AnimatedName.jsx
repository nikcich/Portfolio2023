import { motion } from "framer-motion";

const normal = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
    }
};

const inOut = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
    }
}

function AnimatedName(options) {
    const { name, vb, stroke, delay, loopDelay, duration, size, strokeWidth, loop } = options;
    return (
        <div
            style={{
                display: 'flex',
                height: size ? size : '2rem',
                stroke: stroke ? stroke : 'white',
                alignItems: 'center', justifyContent: 'center', padding: '2px'
            }}
        >
            <motion.svg viewBox={vb} xmlns="http://www.w3.org/2000/svg"
                width="99%" height="99%"
            >
                <motion.g>
                    {/* <motion.path
                        initial={{ pathLength: 0, }}
                        animate={{ pathLength: 1, }}
                        transition={{
                            delay: delay ? delay : 0,
                            duration: duration ? duration : 0,
                            ease: "easeInOut",
                            repeat: loop ? Infinity : 0,
                            repeatType: "loop",
                            repeatDelay: loopDelay ? loopDelay : 0,
                        }}
                        strokeWidth={strokeWidth ? strokeWidth : '1'}
                        strokeDasharray="0 1"
                        d={name}
                        fill="none"
                    /> */}

                    <motion.path
                        variants={normal}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: {
                                duration: duration ? duration : 2,
                                ease: 'easeInOut',
                                repeatType: 'mirror',
                                repeat: loop ? Infinity : 0,
                                repeatDelay: loopDelay ? loopDelay : 0,
                                delay: delay ? delay : 0,
                            }
                        }}
                        strokeWidth={strokeWidth ? strokeWidth : '1'}
                        strokeDasharray="0 1"
                        d={name}
                        fill="none"
                    />
                </motion.g>
            </motion.svg>
        </div >
    )
}

export default AnimatedName;