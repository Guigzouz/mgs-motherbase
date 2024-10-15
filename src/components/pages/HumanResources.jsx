import React from "react";
import { Nes } from "../molecules";
import { Lights, Meshs, Scene } from "../../playground";
import { OrbitControls } from "@react-three/drei";

const HumanResourcesScene = () => {
  return (
    <Scene camera={{ position: [0, -3, 0], fov: 75 }}>
      <OrbitControls />
      <Lights.Ambient position={[0, -2, 5]} />

      {/* 3D Hexagon mesh with animation */}
      <Meshs.Hexagon
        animation={(meshRef, state, delta, frame) => {
          meshRef.current.rotation.z += 0.5 * delta;
        }}
        mesh={{ position: [0, 1, 0] }}
        materials={{ color: "hotpink" }}
        depth={0.8} // Extruding the Meshs.Hexagon to be thicker
      />
    </Scene>
  );
};

export default HumanResourcesScene;
