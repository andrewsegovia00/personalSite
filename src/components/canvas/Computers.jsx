import { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF(`./lucario/scene.gltf`)
  
  return (
<mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={0.05} />
        <spotLight position={[30, 50, 10]} 
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 3 : 2}
        position={isMobile ? [0, -2.80, 0] : [0, -3.25, 0]}
        rotation={[0, 1.2, 0]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <div className={isMobile ? 'w-full h-96 bottom-0 absolute' : 'float-right h-screen w-6/12'}>
    <Canvas 
    frameloop="demand"
    shadows
    dpr={[1, 2]}
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{preserveDrawingBuffer: true}}
  >   
    <Suspense fallback={ <CanvasLoader /> }>
      <OrbitControls 
      autoRotate
      enableZoom={false} 
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
      <Computers isMobile={isMobile} />
    </Suspense>
    <Preload all />
    </Canvas>
    </div>
  )
}

export default ComputerCanvas