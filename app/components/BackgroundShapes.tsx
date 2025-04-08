"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import styles from '../styles/BackgroundShapes.module.scss';

const earthTones = [
    "#A0522D", // sienna
    "#CD853F", // peru
    "#D2B48C", // tan
    "#8FBC8F", // dark sea green
    "#F4A460", // sandy brown
    "#DEB887", // burlywood
    "#BC8F8F", // rosy brown
    "#C0D6DF", // soft blue-gray
    "#B0C4DE", // light steel blue
    "#EEE8AA", // pale goldenrod
];

const randomEarthTone = () => {
    const base = earthTones[Math.floor(Math.random() * earthTones.length)];
    return new THREE.Color(base).offsetHSL(0, 0.1, 0.1).getStyle(); // Slightly brighten
};

const Shape = ({ type, position, rotation, color }) => {
    let geometry;
    switch (type) {
        case "box":
            geometry = <boxGeometry args={[1, 1, 1]} />;
            break;
        case "sphere":
            geometry = <sphereGeometry args={[0.7, 32, 32]} />;
            break;
        case "cone":
            geometry = <coneGeometry args={[0.7, 1.5, 32]} />;
            break;
    }

    return (
        <mesh position={position} rotation={rotation}>
            {geometry}
            <meshStandardMaterial color={color} roughness={0.5} metalness={0.3} />
        </mesh>
    );
};

const RandomShapes = ({ count = 100 }) => {
    const shapes = useMemo(() => {
        const types = ["sphere"];
        return new Array(count).fill().map(() => ({
            type: types[Math.floor(Math.random() * types.length)],
            position: [
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 50,
                (Math.random() - 0.5) * 50,
            ],
            rotation: [
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI,
            ],

            color: randomEarthTone(),
        }));
    }, [count]);

    return shapes.map((props, i) => <Shape key={i} {...props} />);
};

export default function BackgroundShapes() {
    return (
        <div className={styles.BackgroundShapes}>
            <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <RandomShapes count={50} />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
