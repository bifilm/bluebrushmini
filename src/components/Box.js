import React, { useState } from "react";
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
          opacity={boxVis ? 0 : 1.0}
          color="red"
        />
      </mesh>
      <mesh position={[0.5, 0.5, 0.5]}>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
}
