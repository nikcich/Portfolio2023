import React, { useMemo, useRef } from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { MeshDistortMaterial } from "@react-three/drei";

const Blob = () => {
    const mesh = useRef();
    const hover = useRef(false);

    return (
        <mesh
            ref={mesh}
            scale={1.5}
            position={[0, 0, -2]}
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
        >
            <icosahedronBufferGeometry args={[2, 30]} />
            <MeshDistortMaterial
                distort={0.4}
                speed={1.5}

            />

        </mesh>
    );
};

export default Blob;