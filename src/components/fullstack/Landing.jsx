import { faFacebook, faGithub, faInstagram, faLinkedin, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Preload } from '@react-three/drei';
import Computer from './../../models/Computer';
import Loader from '../../components/Loader'

const Landing = () => {

  const [isRotating, setIsRotating] = useState(false)

  const adjustComputerForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;

    if (window.innerWidth < 400) {
      screenPosition = [0, -1.5, -0.8]
      screenScale = [0.5, 0.5, 0.5]
    } else if (window.innerWidth < 768) {
      screenPosition = [0, -1.5, -0.8]
      screenScale = [0.7, 0.7, 0.7]
    } else if (window.innerWidth < 1090) {
      screenPosition = [0, -1.5, -0.8]
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenPosition = [0, -2, -0.8]
      screenScale = [1.1, 1.1, 1.1]
    }

    return [screenScale, screenPosition]
  }

  const [computerScale, computerPosition] = adjustComputerForScreenSize()

  return (
    <section className="landing-fullstack  flex flex-col items-center justify-evenly min-h-[95vh] gap-2 p-2" id='landing'>


      <div className="title w-full h-full flex-[1] flex flex-col items-center justify-center">
        <div className=" flex items-end justify-center w-full">
          <h1
            className='relative text-xl text-center text-indigo-700/95 font-extrabold sm:text-3xl md:text-6xl pt-4 sm:p-4 '>
            <span
              className='absolute -top-1 sm:-top-2 md:-top-10 lg:-top-7 font-normal'>I'm
            </span> MOHAMMED ELSHAFIE&nbsp;
            <span
              className='hidden sm:inline-block'>ABD ELKADER OMAR
            </span>
          </h1>
        </div>

        <div className="flex items-start justify-center w-full">
          <h2
            className='relative text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-500/60'>
            Full-stack Developer
            <span className="absolute text-sm sm:text-lg md:text-2xl -bottom-5 text-gray-800 dark:text-gray-200 md:-bottom-7 right-0">Mern-Stack</span>
          </h2>
        </div>
      </div>

      <div className="3d-section relative flex items-center justify-center flex-[5] md:p-6 w-full h-full">

        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
          className={`flex items-center justify-center !absolute top-0 left-0 w-full h-full ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>


          <Suspense fallback={<Loader />}>

            {/* <directionalLight position={[1, 1, 1]} intensity={1} />
            <ambientLight intensity={0.5} /> */}
            {/* <pointLight /> */}
            {/* <spotLight /> */}

            <directionalLight position={[5, 5, 0]} intensity={10} />

            <hemisphereLight intensity={1} groundColor="black" />


            <pointLight intensity={1} position={[5, -2, 0]} />

            <spotLight
              position={[-10, 0, 0]}
              angle={0.001}
              penumbra={100}
              intensity={100}
              castShadow
              shadow-mapSize={1024}
            />

            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />

            <Computer
              position={computerPosition}
              scale={computerScale}
              rotation={[0, 5.9, -0.1]}
            />

          </Suspense>

          <Preload all />
        </Canvas>
      </div>

      <div className='social flex-[1] flex items-center justify-center gap-1 sm:gap-4 md:gap-6 lg:gap-8 w-full'>

        <Link>
          <div className="github w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
            <FontAwesomeIcon className='text-black sm:w-8 sm:h-8' icon={faGithub} size='xl' />
          </div>
        </Link>

        <Link>
          <div className="facebook w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
            <FontAwesomeIcon
              className="text-[#4267B2] sm:text-[#000000] sm:w-8 sm:h-8"
              icon={faFacebook}
              size="lg" />
          </div>
        </Link>

        <Link>
          <div className="linked w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
            <FontAwesomeIcon
              className="text-[#0077B5] sm:text-[#000000]  sm:w-8 sm:h-8"
              icon={faLinkedin} size="lg" />
          </div>
        </Link>

        <Link>
          <div className="insta w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon className="sm:w-8 sm:h-8" icon={faInstagram} size="lg" />
          </div>
        </Link>
        <Link>
          <div className="twitter w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
            <FontAwesomeIcon className="text-[#1DA1F2] sm:text-[#000000] sm:w-8 sm:h-8" icon={faTwitter} size="lg" />
          </div>
        </Link>
        <Link>
          <div className="tiktok w-8 h-8 sm:w-10 sm:h-10 bg-white sm:bg-gray-200 hover:bg-white rounded-lg flex items-center justify-center">
            <FontAwesomeIcon className="text-black sm:w-8 sm:h-8" icon={faTiktok} size="lg" />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Landing