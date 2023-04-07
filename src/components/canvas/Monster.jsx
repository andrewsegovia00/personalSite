import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Monster = () => {
  const earth = useGLTF("./monster/scene.gltf");

  return (
    <primitive object={earth.scene} scale={.1} position-y={-1.25} rotation-y={0} />
  );
};

const MonsterCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <mesh>
      <hemisphereLight intensity={.7} groundColor="black" />
      <spotLight position={[-10, 10, 10]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Monster />

        <Preload all />
      </Suspense>
      </mesh>
    </Canvas>
  );
};

export default MonsterCanvas;