import React from "react";
import { Canvas } from "@react-three/fiber";
import { Edges, PivotControls } from "@react-three/drei";

export default function Cylinder(props) {
  // This reference will give us direct access to the mesh
  // Set up state for the hovered and active state
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <div style={{ height: "100%" }}>
      <Canvas>
        <PivotControls
          rotation={[0, -Math.PI / 2, 0]}
          anchor={[1, -1, -1]}
          scale={75}
          depthTest={false}
          fixed
          lineWidth={2}
        >
          <group>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
              <boxGeometry args={[2, 5, 0.06]} />
              <meshStandardMaterial color={"grey"} />
              <Edges
                scale={1}
                threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="black"
              />
            </mesh>
            <mesh>
              <cylinderGeometry args={[1, 1, 5]} />
              <meshStandardMaterial
                color={"red"}
                transparent={true}
                opacity={0.7}
              />
              <Edges
                scale={1}
                threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="black"
              />
            </mesh>
          </group>
        </PivotControls>
      </Canvas>
    </div>
  );
}
