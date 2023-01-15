import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from'../../assets/Cobblestone.jpg';
import { MeshDistortMaterial } from "@react-three/drei";


export default function Box(props){

    const colorMap = useLoader(TextureLoader, texture);

    return(
        <mesh rotation={props.rot} position={props.pos}>
            <meshNormalMaterial attach="material" />
            <MeshDistortMaterial 
                color="#8240FD" 
                attach="material" 
                distort={0.3} 
                speed={1}
                roughness={0.15}
            />
            <torusGeometry args={props.tor} />
        </mesh>
    )
}