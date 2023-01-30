import React from "react";
import { Canvas } from "@react-three/fiber";

export default function Cylinder(props) {
  // This reference will give us direct access to the mesh
  // Set up state for the hovered and active state
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <div style={{ height: "100%" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </Canvas>
    </div>
  );
}
