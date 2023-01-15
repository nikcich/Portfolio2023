import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere(){
    return(
        <Sphere visible args={[1, 1000, 200]} scale={1}>
            <MeshDistortMaterial 
                color="#8352FD" 
                attach="material" 
                distort={0.7} 
                speed={2}
                roughness={0.15}
            />
        </Sphere>
    );
}