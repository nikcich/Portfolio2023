import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import stnik from '../assets/stnikf1.png';

import ParticleImage, {
    ParticleOptions,
    Vector,
    forces,
    ParticleForce
} from "react-particle-image";

const particleOptions = {
    filter: ({ x, y, image }) => {
        // Get pixel
        const pixel = image.get(x, y);
        // Make a particle for this pixel if blue > 50 (range 0-255)
        return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#61dafb",
    radius: () => 4,
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
        return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    }
};

const motionForce = (x, y) => {
    return forces.disturbance(x, y, 5);
};

function ParticleBackground(options) {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <div style={{
            height: '100vh', width: '100vw', position: 'absolute', top: '0', left: '0',
            zIndex: '0', background: 'red',
        }}>


        </div>
    );
}

export default ParticleBackground;