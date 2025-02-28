import { Suspense, useState } from "react";

// Three js
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

// 3D Model
import PlaneLowPoly from "../public/PlaneLowPoly";

// Components
import LoadingScreen from "./components/LoadingScreen";

// Styles
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Canvas
        camera={{
          position: [-50, 50, 60], // Positioned above and behind for top-down angled view
          fov: 30,  // Narrower FOV for better perspective
        }}>
        <ambientLight intensity={1} />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          target={[0, 0, 0]} />
        <Suspense fallback={null}>
          <PlaneLowPoly
            position={[0, -5, 0]}
            rotation={[0, 0, 0]} // Tilted slightly up and rotated 180°
            onLoad={() => setIsLoading(false)} />
        </Suspense>
        <Environment preset="night" /> {/* Changed to night to match the dark background */}
      </Canvas>
    </>
  )
}
