import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
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
      <Stars></Stars>
      <ambientLight intensity={0.8}></ambientLight>
      <spotLight position={[9, 15, 11]} angle={0.3}></spotLight>
      <Box></Box>
    </Canvas>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
