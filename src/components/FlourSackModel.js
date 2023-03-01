import Shine_Sprite from "../assets/Shine_Sprite.gltf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
export default function FlourSackModel() {
  const { nodes, materials } = useGLTF(Shine_Sprite);
  console.log(nodes.Shine_Sprite.children[0].geometry);
  return (
    <mesh
      geometry={nodes.Shine_Sprite.children[0].geometry}
      material={materials.material}
    >
      <meshStandardMaterial color="green" />
    </mesh>
  );
}
