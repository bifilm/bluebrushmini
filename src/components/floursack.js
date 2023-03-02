import FLOURSACK1 from "../assets/FLOURSACK1.gltf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import React, { useState } from "react";
import { Edges, OrbitControls, Grid, Line } from "@react-three/drei";

export default function FlourSack({
  initialBoxVisibility,
  positionArray,
  rotationArray,
}) {
  const { nodes, materials } = useGLTF(FLOURSACK1);
  //get bounding box of the geometry
  const box = new THREE.Box3().setFromObject(nodes.Body1);
  const size = new THREE.Vector3();
  box.getSize(size);

  const [flourSackVisiibility, setFlourSackVisibility] =
    useState(initialBoxVisibility);
  return (
    <group position={positionArray} rotation={rotationArray}>
      <mesh>
        {flourSackVisiibility && (
          <mesh
            geometry={nodes.Body1.geometry}
            material={materials.material}
            rotation={[0, -1.5708, 0]}
          >
            <meshStandardMaterial color="green" />
          </mesh>
        )}
        <mesh
          onClick={(event) => {
            setFlourSackVisibility(!flourSackVisiibility);
            console.log(flourSackVisiibility);
            console.log("here");
          }}
          rotation={[0, -1.5708, 0]}
        >
          <boxGeometry args={[size.x, size.y, size.z]} />
          <meshStandardMaterial transparent={true} opacity={0} />
          <Edges
            scale={1}
            threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
            color="black"
          />
        </mesh>
      </mesh>
    </group>
  );
}
