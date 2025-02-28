import { useState, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

// 3D Model
import Plane from "../public/Plane";
import BoengPlane from "../public/BoengPlane";

// Styles
import "./App.css";

export default function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1.3} />
        <OrbitControls />
        <Suspense fallback={null}>
          <BoengPlane />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <div>
        <h1>Earth</h1>
      </div>
    </>
  )
}
