import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from'../../assets/Cobblestone.jpg';
import { MeshDistortMaterial } from "@react-three/drei";
import { useColorMode } from "@chakra-ui/react";


export default function Knot(props){

    const colorMap = useLoader(TextureLoader, texture);
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return(
        <mesh rotation={props.rot} position={props.pos}>
            <MeshDistortMaterial 
                distort={0.3} 
                speed={1}
                wireframe
                color={isDark ? "white" : "black"}
            />
            <torusKnotGeometry args={props.tor} />
        </mesh>
    );
}