import React, { useState } from "react";
import { Edges, OrbitControls, Grid, Line } from "@react-three/drei";
import FlourSackModel from "./FlourSackModel";
export default function FlourSack({
  initialBoxVisibility,
  positionArray,
  rotationArray,
}) {
  const [flourSackVisiibility, setFlourSackVisibility] =
    useState(initialBoxVisibility);

  return (
    <group position={positionArray} rotation={rotationArray}>
      <mesh
        onClick={(event) => {
          setFlourSackVisibility(!flourSackVisiibility);
          console.log(flourSackVisiibility);
          console.log("here");
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial transparent={true} opacity={0} color="red" />
        <Edges
          scale={1}
          threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
          color="black"
        />
        {flourSackVisiibility && <FlourSackModel />}
      </mesh>
      <mesh position={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
}
