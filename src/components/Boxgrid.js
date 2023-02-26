import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Line } from "@react-three/drei";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Box from "./Box";

export default function Boxgrid(props) {
  const [cylinderVisible, setCylinderVisible] = useState(true);
  const drawingCanvas2 = useRef();
  const [rotation, setRotation] = useState(0);
  const [fov, setFov] = useState(90);
  const [distance, setDistance] = useState(10);
  const [distanceBetweenBoxes, setDistanceBetweenBoxes] = useState(3);
  const [rotationPerBox, setRotationPerBox] = useState(30);
  const [boxCount, setBoxCount] = useState(5);
  const [toggleCanvas, setToggleCanvas] = useState(-4);

  function Environment() {
    useFrame((state) => {
      state.camera.fov = fov;
      state.camera.position.z = distance;
      state.camera.updateProjectionMatrix();
    });
    return null;
  }

  const height = 2;
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
    <div style={{ height: "80%" }} tabIndex={0} onKeyDown={onKeyPressed}>
      <span>Set distance</span>
      <span> {distance}</span>
      <Slider
        style={{ width: "200px", marginLeft: "10px" }}
        onChange={(nextValues) => {
          setDistance(nextValues);
        }}
        min={0}
        max={30}
        defaultValue={10}
        step={0.01}
      />
      <span>Set fov</span>
      <span> {fov}</span>
      <Slider
        style={{ width: "400px", marginLeft: "10px" }}
        onChange={(nextValues) => {
          setFov(nextValues);
        }}
        min={0}
        max={150}
        defaultValue={90}
        step={1}
      />
      <button
        onClick={() => {
          drawingCanvas2.current.clearCanvas();
        }}
      >
        Clear Canvas (d)
      </button>
      <button
        onClick={() => {
          setRotation(Math.random() * 3);
          drawingCanvas2.current.clearCanvas();
        }}
      >
        Focus Canvas or not (spacebar)
      </button>

      <button
        onClick={() => {
          setCylinderVisible(!cylinderVisible);
        }}
      >
        HIDE OR SHOW CYLINDER (a)
      </button>
      <span
        style={{
          color: "white",
          background: `rgb(${toggleCanvas * 600},${toggleCanvas * 600},${
            toggleCanvas * 600
          })`,
        }}
      >
        Drawing mode off
      </span>
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
          camera={{ position: [0, 0, 10], fov: fov }}
        >
          <Environment />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Box
            initialBoxVisibility={false}
            positionArray={[0, 0, 1]}
            rotationArray={[0, 2, 2]}
          />

          <gridHelper
            args={[10, 10]}
            position={[0, -1.5, 0]}
            rotation={[0, Math.PI / 4, 0]}
          ></gridHelper>
        </Canvas>
      </div>
    </div>
  );
}
