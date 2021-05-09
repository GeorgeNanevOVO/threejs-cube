import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Sphere,
  MeshDistortMaterial,
  Tetrahedron,
  MeshWobbleMaterial,
  MapControls,
} from "@react-three/drei";
import "./index.css";

const App = () => {
  return (
    <Canvas>
      {/* <OrbitControls></OrbitControls> */}
      <MapControls></MapControls>
      <Stars></Stars>
      <ambientLight intensity={0.4}></ambientLight>
      <spotLight position={[6, 15, 11]} angle={0.3}></spotLight>
      <Sphere visible position={[0, 0, 0]} args={[1.2, 18, 300]}>
        <MeshDistortMaterial
          color="#ADFF2F"
          attach="material"
          distort={0.5} // Strength, 0 disables the effect (default=1)
          speed={4} // Speed (default=1)
          roughness={0}
        />
      </Sphere>
      <Sphere visible position={[0, 12, 1]} args={[1.2, 18, 300]}>
        <MeshDistortMaterial
          color="#ADD8E6"
          attach="material"
          distort={0.5} // Strength, 0 disables the effect (default=1)
          speed={4} // Speed (default=1)
          roughness={0}
        />
      </Sphere>
      <Tetrahedron position={[2, 8, 0]}>
        <MeshWobbleMaterial attach="material" color="#ADD8E6" speed={2} />
      </Tetrahedron>
    </Canvas>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
