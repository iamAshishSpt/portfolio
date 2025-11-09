import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Computer = () => {
  const computer = useGLTF("/models/computer-optimized.glb");
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.1;
  });

  return (
    <group ref={group}>
      <primitive object={computer.scene} />
    </group>
  );
};

export default Computer;