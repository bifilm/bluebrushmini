import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Edges, OrbitControls, Grid, Line } from "@react-three/drei";
import { ReactSketchCanvas } from "react-sketch-canvas";

export default function Cylinder(props) {
  const [cylinderVisible, setCylinderVisible] = useState(true);
  const [toggleCanvas, setToggleCanvas] = useState(-4);
  const drawingCanvas2 = useRef();
  // This reference will give us direct access to the mesh
  // Set up state for the hovered and active state
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX
  const onKeyPressed = (e) => {
    if (e.key === " ") {
      setToggleCanvas(toggleCanvas * -1);
    }
    if (e.key === "a") {
      setCylinderVisible(!cylinderVisible);
    }
    if (e.key === "d") {
      drawingCanvas2.current.clearCanvas();
    }
  };
  return (
    <div style={{ height: "90%" }} tabIndex={0} onKeyDown={onKeyPressed}>
      <button
        onClick={() => {
          drawingCanvas2.current.clearCanvas();
        }}
      >
        Clear Canvas (d)
      </button>
      <button
        onClick={() => {
          setToggleCanvas(toggleCanvas * -1);
          console.log(toggleCanvas);
        }}
      >
        Toggle which canvas (spacebar)
      </button>
      <button
        onClick={() => {
          setCylinderVisible(!cylinderVisible);
        }}
      >
        HIDE OR SHOW CYLINDER (a)
      </button>
      <span> if negative 3d canvas on top: {toggleCanvas}</span>
      <div style={{ height: "100%", position: "relative" }}>
        <ReactSketchCanvas
          style={{ position: "absolute", zIndex: toggleCanvas }}
          ref={drawingCanvas2}
          strokeWidth={1}
          strokeColor="red"
          canvasColor="transparent"
        />
        <Canvas
          style={{ borderStyle: "solid" }}
          camera={{ position: [0, 0, 6.4] }}
        >
          <group>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
              <boxGeometry args={[2, 5, 0.06]} />
              <meshStandardMaterial
                color={"grey"}
                transparent={true}
                opacity={0.5}
              />
              <Edges
                scale={1}
                threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="black"
              />
            </mesh>
            {cylinderVisible && (
              <mesh>
                <cylinderGeometry args={[1, 1, 5]} />
                <meshStandardMaterial
                  color={"blue"}
                  transparent={true}
                  opacity={0.7}
                />
                <Edges
                  scale={1}
                  threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                  color="black"
                />
              </mesh>
            )}
          </group>
          <OrbitControls />
          <gridHelper
            args={[10, 10]}
            position={[0, -3, 0]}
            rotation={[0, Math.PI / 4, 0]}
          ></gridHelper>
          <Line
            points={[
              [0, -20, 0],
              [0, 20, 0],
            ]} // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
            color="black" // Default
            lineWidth={1} // In pixels (default)
          />
        </Canvas>
      </div>
    </div>
  );
}
