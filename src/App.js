import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./index.css";

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"></boxBufferGeometry>
      <meshLambertMaterial attach="material" color="grey"></meshLambertMaterial>
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <OrbitControls></OrbitControls>
      <ambientLight intensity={0.8}></ambientLight>
      <Box></Box>
    </Canvas>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
