import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Edges, Box, OrbitControls, TorusKnot } from "@react-three/drei";
import { ReactSketchCanvas } from "react-sketch-canvas";

export default function Snake(props) {
  const [boxVisible, setBoxVisible] = useState(-1);
  const [torusEdges, setTorusEdges] = useState(false);
  const [toggleCanvas, setToggleCanvas] = useState(-4);
  const drawingCanvas = useRef();
  const boxSize = 0.02;
  // This reference will give us direct access to the mesh
  // Set up state for the hovered and active state
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX

  return (
    <div style={{ height: "90%" }}>
      <button
        onClick={() => {
          setBoxVisible(-1 * boxVisible);
        }}
      >
        Hide or show cross sections
      </button>
      <button
        onClick={() => {
          setTorusEdges(!torusEdges);
        }}
      >
        Hide or show torus edges
      </button>
      <button
        onClick={() => {
          drawingCanvas.current.clearCanvas();
        }}
      >
        Clear Canvas
      </button>
      <button
        onClick={() => {
          setToggleCanvas(toggleCanvas * -1);
          console.log(toggleCanvas);
        }}
      >
        Toggle which canvas
      </button>
      <div style={{ height: "100%", display: "flex" }}>
        <ReactSketchCanvas
          style={{ borderStyle: "solid" }}
          ref={drawingCanvas}
          strokeWidth={1}
          strokeColor="red"
          canvasColor="transparent"
        />
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <TorusKnot args={[2, 0.5, 64, 60, 1, 2]}>
            <meshStandardMaterial
              color={"green"}
              transparent={true}
              opacity={1}
            />
            {torusEdges && (
              <Edges
                scale={1}
                threshold={2} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="black"
              />
            )}
          </TorusKnot>

          <Box
            args={[1.25, 1.25, boxSize]}
            position={[0, 2.3, 0]}
            rotation={[0, Math.PI / 6, 0]}
          >
            <meshStandardMaterial
              color="red"
              transparent={true}
              opacity={boxVisible}
              alphaTest={0.5}
            />
            <Edges
              scale={1}
              threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
              color="black"
              depthTest={false}
            />
          </Box>
          <Box
            args={[1.25, 1.25, boxSize]}
            position={[0, -2.3, 0]}
            rotation={[0, -Math.PI / 6, 0]}
          >
            <meshStandardMaterial
              color="red"
              transparent={true}
              opacity={boxVisible}
              alphaTest={0.5}
            />
            <Edges
              scale={1}
              threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
              color="black"
              depthTest={false}
            />
          </Box>
          <Box
            args={[2, boxSize, 1.3]}
            position={[-4.7, 0, 0]}
            rotation={[-Math.PI / 6, 0, 0]}
          >
            <meshStandardMaterial
              color="blue"
              transparent={true}
              opacity={boxVisible}
              alphaTest={0.5}
            />
            <Edges
              scale={1}
              threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
              color="black"
              depthTest={false}
            />
          </Box>

          <Box
            args={[2, boxSize, 1.3]}
            position={[4.7, 0, 0]}
            rotation={[Math.PI / 6, 0, 0]}
          >
            <meshStandardMaterial
              color="blue"
              transparent={true}
              opacity={boxVisible}
              alphaTest={0.5}
            />
            <Edges
              scale={1}
              threshold={80} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
              color="black"
              depthTest={false}
            />
          </Box>

          <gridHelper
            args={[10, 10]}
            position={[0, -3, 0]}
            rotation={[0, Math.PI / 4, 0]}
          ></gridHelper>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
