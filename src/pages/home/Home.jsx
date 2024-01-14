import { Canvas } from '@react-three/fiber';
import { Suspense, lazy, useEffect, useState } from 'react';

import Loader from '../../components/Loader';
import Castle from '../../models/Castle';
import Sky from '../../models/Sky';
import HomeInfo from '../../components/HomeInfo';
import Plane from '../../models/Plane';

// const Sky = lazy(() => import('../../models/Sky'));
// const Loader = lazy(() => import('../../components/Loader'))
// const Castle = lazy(() => import('../../models/Castle'))
// const HomeInfo = lazy(() => import('../../components/HomeInfo'))
// const Plane = lazy(() => import('../../models/Plane'))



const Home = ({ mode }) => {

  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)


  const adjustCastleForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0.25, 5.34, 0];

    if (window.innerWidth < 400) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -20, -90];
    } else if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -15, -65];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -15, -60];
    }

    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position

    if (window.innerWidth < 400) {
      screenScale = [12, 12, 12];
      screenPosition = [0, -11, -78];
    } else if (window.innerWidth < 768) {
      screenScale = [12, 12, 12];
      screenPosition = [0, -5, -52];
    } else if (window.innerWidth < 1090) {
      screenScale = [12, 12, 12];
      screenPosition = [0, -2, -40];
    } else {
      screenScale = [13, 13, 13];
      screenPosition = [0, 0, -44];
    }


    return [screenScale, screenPosition];
  };

  const [castleScale, castlePosition, castleRotation] = adjustCastleForScreenSize()

  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <main className='bg-slate-300/20 relative overflow-hidden'>

      <section className="w-full h-[89vh] relative overflow-hidden">

        <div className='absolute w-full h-[60%] sm:h-[40%] top-6 sm:top-20 md:top-10 left-0 right-0 z-10 flex items-center justify-center'>
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
          className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={mode === 'dark' ? -2.9 : 0} />
            <Sky isRotating={isRotating} />
          </Suspense>
        </Canvas>

        <Canvas
          className={`!absolute top-32 sm:top-24 left-0 h-[50%] ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera={{ near: 0.1, far: 1000 }}>

          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={1} />
            <ambientLight intensity={mode === 'dark' ? -0.5 : 0.5} />

            {/* <pointLight position={[1, 1, 1]} intensity={20}  /> */}

            {mode === 'dark' &&
              <spotLight intensity={2000} position={[0, 0, 2]} />
            }

            <hemisphereLight
              skyColor='#b1e1ff'
              groundColor='#000000'
              intensity={1} />

            <Castle
              position={castlePosition}
              scale={castleScale}
              rotation={castleRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />

            <Plane
              isRotating={isRotating}
              position={planePosition}
              rotation={[0, 20.1, 0]}
              scale={planeScale}
            />

          </Suspense>

        </Canvas>

      </section>
    </main>
  )
}

export default Home