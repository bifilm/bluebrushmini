import React, { useState } from "react";
import { Edges, OrbitControls, Grid, Line } from "@react-three/drei";
export default function Box({
  initialBoxVisibility,
  positionArray,
  rotationArray,
}) {
  const [boxVis, setBoxVis] = useState(initialBoxVisibility);
  return (
    <group position={positionArray} rotation={rotationArray}>
      <mesh
        onClick={(event) => {
          setBoxVis(!boxVis);
          console.log(boxVis);
          console.log("here");
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          transparent={true}
          opacity={boxVis ? 0.8 : 0}
          color="red"
        />
        {boxVis && (
          <Edges
            scale={1}
            threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
            color="black"
          />
        )}
      </mesh>
      <mesh position={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
}
