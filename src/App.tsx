import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

// 3D Model
import BoengPlane from "../public/BoengPlane";
import { Marker } from "./components/Marker";

// Styles
import "./App.css";

export default function App() {
  return (
    <>
      <Canvas 
        camera={{ 
          position: [-5, 7, -5], // Positioned above and behind for top-down angled view
          // position: [-10, 10, -9], // Positioned above and behind for top-down angled view
          fov: 35,  // Narrower FOV for better perspective
          // near: 0.1,
          // far: 1000
        }} 
      >
        <ambientLight intensity={1} />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          target={[0, 0, 0]}
        />
        <Suspense fallback={null}>
          <BoengPlane 
            position={[0, 0, 0]}
            rotation={[0,0, 0]} // Tilted slightly up and rotated 180°
          />
          
          {/* Tail */}
          <Marker 
            position={[2.85, 1.5, 0]} 
            label="Engine Issue"
            description="Left engine requires maintenance due to unusual vibration."
          />

          {/* Nose */}
          <Marker 
            position={[-3.4, .5, 0]} 
            label="Wing Status"
            description="Right wing flaps operating normally."
          />

          {/* Engine */}
          <Marker 
            position={[-1, .3, -.8]} 
            label="Engine Status"
            description="Right wing flaps operating normally."
          />

          {/* Wings */}
          <Marker 
            position={[0, .7, 1.3]} 
            label="Wing Status"
            description="Right wing flaps operating normally."
          />
          
        </Suspense>
        <Environment preset="night" /> {/* Changed to night to match the dark background */}
      </Canvas>
      <div>
        <h1>Earth</h1>
      </div>
    </>
  )
}
