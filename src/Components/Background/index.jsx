import { useState, Suspense, useEffect, useRef } from 'react'
import './background.css';
import Box from './Box';
import { useColorMode } from "@chakra-ui/react";
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedSphere from './AnimatedSphere';
import { TextureLoader } from 'three';
import codes from '../../assets/codes.png';
import cppcode from '../../assets/cppcode.png';
import Blob from './Blob';

import Pill from './Pill';
import Knot from './Knot';
import Text from './Text';

const Camera = (props) => {
    const ref = useRef();
    const set = useThree((state) => state.set);
    useEffect(() => void set({ camera: ref.current }), []);
    useFrame(() => ref.current.updateMatrixWorld());
    return <perspectiveCamera ref={ref} {...props} />;
};


const Background = (props) => {

    const colorMap = useLoader(TextureLoader, codes);
    const cppback = useLoader(TextureLoader, cppcode);

    function dr(degrees) {
        var pi = Math.PI;
        return degrees * (pi / 180);
    }

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <>
            <Canvas style={{
                width: '100vw', height: '100vh', zIndex: '-1',
                position: 'absolute', top: '0', left: '0', opacity: isDark ? '0.2' : '0.2'
            }}>
                <OrbitControls enabled={false} enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.2}
                    enablePan={false}
                    enableDamping={false}
                />

                <ambientLight intensity={0.2} />
                <pointLight position={[2, 5, 2]} color="#F478FE" />
                <Suspense fallback={null}>
                    <Knot
                        pos={[0, 0, 0]}
                        rot={[dr(-45), dr(0), 0]}
                        tor={[1.5, 0.4, 250, 16, 4, 3]}
                    />

                    <mesh rotation={[dr(-10), dr(0), dr(10)]} position={[-8, 2, -5]}>
                        <planeGeometry attach="geometry" args={[10, 10]} />
                        <meshBasicMaterial attach="material" map={colorMap} transparent />
                    </mesh>

                    <mesh rotation={[dr(-10), dr(0), dr(-10)]} position={[8, -2, -2]}>
                        <planeGeometry attach="geometry" args={[10, 10]} />
                        <meshBasicMaterial attach="material" map={cppback} transparent />
                    </mesh>



                    <mesh rotation={[dr(-20), dr(0), dr(10)]} position={[16, 2, -5]}>
                        <planeGeometry attach="geometry" args={[10, 10]} />
                        <meshBasicMaterial attach="material" map={colorMap} transparent />
                    </mesh>

                    <mesh rotation={[dr(-10), dr(0), dr(-10)]} position={[-10, -2, -2]}>
                        <planeGeometry attach="geometry" args={[10, 10]} />
                        <meshBasicMaterial attach="material" map={cppback} transparent />
                    </mesh>
                </Suspense>
            </Canvas>
        </>
    );
}

export default Background;







