import { motion } from "framer-motion";
import React, { useState } from "react";

export default function (props) {
    const { dragConstraints, foreground, setForeground, idx, destroy } = props;

    return (
        <motion.div
            style={{
                background: 'rgba(0,0,0, 0.4)', pointerEvents: 'none',
                borderRadius: '0.5rem', overflow: 'hidden',
                maxHeight: '80vh', maxWidth: '80vw',
                width: '1300px', aspectRatio: '16/10',
                zIndex: idx == foreground ? '101' : '100',
                border: '2px solid black', flexShrink: '0',
                position: 'absolute', backdropFilter: 'blur(10px)',
            }}
            drag dragConstraints={dragConstraints}
        >
            <div
                style={{
                    width: '100%', height: '25px',
                    background: 'white', pointerEvents: 'auto',
                    display: 'flex', justifyContent: 'flex-end', cursor: 'grab'
                }}
                onMouseDown={() => setForeground(idx)}
                onPointerDown={() => setForeground(idx)}
            >
                <button 
                    style={{ height: '100%', aspectRatio: '1/1', color: 'black', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', padding: '0', margin: '0' }}
                    onClick={destroy}
                >&times;</button>
            </div>

            {props.children}
        </motion.div >
    )
}

{/* <DragWindow
                dragConstraints={dragConstraints} idx={1}
                foreground={foreground}
                setForeground={setForeground}
            >
                <h1>HELLO WORLD</h1>
            </DragWindow>

            <DragWindow
                dragConstraints={dragConstraints} idx={2}
                foreground={foreground}
                setForeground={setForeground}
            >
                <h1>HELLO WORLD2</h1>
            </DragWindow>

            <DragWindow
                dragConstraints={dragConstraints} idx={3}
                foreground={foreground}
                setForeground={setForeground}
            >
                <h1>HELLO WORLD3</h1>
            </DragWindow> */}