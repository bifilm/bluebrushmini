import Shine_Sprite from "../assets/Shine_Sprite.gltf";
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
  const { nodes, materials } = useGLTF(Shine_Sprite);
  console.log(nodes.Shine_Sprite.children[0].geometry);
  //get bounding box of the geometry
  const box = new THREE.Box3().setFromObject(nodes.Shine_Sprite.children[0]);
  const size = new THREE.Vector3();
  box.getSize(size);

  const [flourSackVisiibility, setFlourSackVisibility] =
    useState(initialBoxVisibility);
  return (
    <group position={positionArray} rotation={rotationArray}>
      <mesh>
        {flourSackVisiibility && (
          <mesh
            geometry={nodes.Shine_Sprite.children[0].geometry}
            material={materials.material}
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
