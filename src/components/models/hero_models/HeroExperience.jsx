import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense, useState, useEffect } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Add a small delay to ensure the canvas is properly mounted
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (error) {
    console.error("Error in HeroExperience:", error);
    return null;
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {isLoading && (
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)",
          color: "white",
          zIndex: 1
        }}>
          Loading...
        </div>
      )}
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 45 }}
        style={{ opacity: isLoading ? 0 : 1 }}
      >
        {/* deep blue ambient */}
        <ambientLight intensity={0.2} color="#1a1a40" />
        {/* Configure OrbitControls to disable zooming and make the interaction more controlled */}
        <OrbitControls
          enablePan={false}
          enableZoom={false} // Disable zooming
          enableRotate={true} // Enable rotation
          maxDistance={15}
          minDistance={15}
          minPolarAngle={Math.PI / 5} // Restore original rotation limits
          maxPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />

        <Suspense fallback={null}>
          <HeroLights />
          <Particles count={100} />
          <group
            scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;