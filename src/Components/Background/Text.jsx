import React from 'react';
import Roboto from './Roboto.json';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend } from '@react-three/fiber';
import { MeshDistortMaterial } from "@react-three/drei";

extend({TextGeometry})
export default function Text(props) {
    // parse JSON file with Three
    const font = new FontLoader().parse(Roboto);

    // configure font geometry
    const textOptions = {
        font,
        size: 1.75,
        height: 0.2
    };


    return (
        <mesh rotation={props.rot} position={props.pos}>
            <textGeometry attach='geometry' args={[props.txt, textOptions]} />
            <MeshDistortMaterial 
                color="#8240FD" 
                attach="material" 
                distort={0.1} 
                speed={1}
                roughness={0.15}
            />
        </mesh>
    )
}