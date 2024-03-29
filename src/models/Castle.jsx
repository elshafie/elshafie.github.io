/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/no-unknown-property */
// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// Author: Sereib (https://sketchfab.com/Sereib)
// License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
// Source: https://sketchfab.com/3d-models/medieval-pentagon-castle-aa352f61de1646209a36f634e6b6dc27
// Title: Medieval Pentagon Castle
// */

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

import { useFrame, useThree } from '@react-three/fiber';

import castleScene from '../assets/3d/castle.glb';

import { a } from '@react-spring/three';

const Castle = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const castleRef = useRef();

  const { gl, viewport } = useThree()

  const { nodes, materials } = useGLTF(castleScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault()
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    lastX.current = clientX
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault()
    setIsRotating(false);

  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();


    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      castleRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  // Handle keydown events
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      castleRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.015;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      castleRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.015;
    }
  };

  // Handle keyup events
  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };




  useEffect(() => {

    const canvas = gl.domElement

    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);

    canvas.addEventListener('touchmove', handlePointerMove);
    canvas.addEventListener('touchend', handlePointerUp);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {

      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);

      canvas.removeEventListener('touchmove', handlePointerMove);
      canvas.removeEventListener('touchend', handlePointerUp);

      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    }

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp])

  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)

    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      castleRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = castleRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 6.2 || normalizedRotation <= 0.8:
          setCurrentStage(5);
          break;
        case normalizedRotation >= 1.1 && normalizedRotation <= 2.1:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 2.3 && normalizedRotation <= 3.4:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 3.7 && normalizedRotation <= 4.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.75 && normalizedRotation <= 5.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }

    }

  })

  return (
    <a.group {...props} ref={castleRef}>
      <a.group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.stone_lime_01_m_0001}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.stone_lime_01_m_0002}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.stone_lime_01_m_0003}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.stone_lime_01_m_0004}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.stone_lime_01_m_0005}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.stone_lime_01_m_0006}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.stone_lime_01_m_0007}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.stone_lime_01_m_0008}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.stone_lime_01_m_0009}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.stone_lime_01_m_0010}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.stone_lime_02_m_0001}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.stone_lime_02_m_0002}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.stone_lime_02_m_0003}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.stone_lime_02_m_0004}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.stone_lime_02_m_0005}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.stone_lime_02_m_0006}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.stone_lime_02_m_0007}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.stone_lime_02_m_0008}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.stone_lime_beige_01_m_0001}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.stone_lime_beige_01_m_0001}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.stone_lime_beige_01_m_0002}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.stone_lime_beige_01_m_0002}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.stone_lime_beige_01_m_0003}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.stone_lime_beige_01_m_0003}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.stone_lime_beige_01_m_0004}
        />
        <mesh


          geometry={nodes.Object_27.geometry}
          material={materials.stone_lime_beige_01_m_0004}
        />
        <mesh


          geometry={nodes.Object_28.geometry}
          material={materials.stone_lime_beige_01_m_0005}
        />
        <mesh


          geometry={nodes.Object_29.geometry}
          material={materials.stone_lime_beige_01_m_0005}
        />
        <mesh


          geometry={nodes.Object_30.geometry}
          material={materials.stone_lime_beige_01_m_0006}
        />
        <mesh


          geometry={nodes.Object_31.geometry}
          material={materials.stone_lime_beige_01_m_0006}
        />
        <mesh


          geometry={nodes.Object_32.geometry}
          material={materials.stone_lime_beige_01_m_0007}
        />
        <mesh


          geometry={nodes.Object_33.geometry}
          material={materials.stone_lime_beige_01_m_0007}
        />
        <mesh


          geometry={nodes.Object_34.geometry}
          material={materials.stone_lime_beige_01_m_0008}
        />
        <mesh


          geometry={nodes.Object_35.geometry}
          material={materials.stone_lime_beige_01_m_0008}
        />
        <mesh


          geometry={nodes.Object_36.geometry}
          material={materials.stone_lime_beige_01_m_0009}
        />
        <mesh


          geometry={nodes.Object_37.geometry}
          material={materials.stone_lime_beige_01_m_0009}
        />
        <mesh


          geometry={nodes.Object_38.geometry}
          material={materials.stone_lime_rose_01_m_0001}
        />
        <mesh


          geometry={nodes.Object_39.geometry}
          material={materials.stone_lime_rose_01_m_0002}
        />
        <mesh


          geometry={nodes.Object_40.geometry}
          material={materials.stone_lime_rose_01_m_0003}
        />
        <mesh


          geometry={nodes.Object_41.geometry}
          material={materials.stone_lime_rose_01_m_0004}
        />
        <mesh


          geometry={nodes.Object_42.geometry}
          material={materials.stone_lime_rose_01_m_0005}
        />
        <mesh


          geometry={nodes.Object_43.geometry}
          material={materials.stone_lime_rose_01_m_0006}
        />
        <mesh


          geometry={nodes.Object_44.geometry}
          material={materials.stone_lime_white_01_m_0001}
        />
        <mesh


          geometry={nodes.Object_45.geometry}
          material={materials.stone_lime_white_01_m_0002}
        />
        <mesh


          geometry={nodes.Object_46.geometry}
          material={materials.stone_lime_white_01_m_0003}
        />
        <mesh


          geometry={nodes.Object_47.geometry}
          material={materials.stone_lime_white_01_m_0004}
        />
        <mesh


          geometry={nodes.Object_48.geometry}
          material={materials.stone_lime_white_01_m_0005}
        />
        <mesh


          geometry={nodes.Object_49.geometry}
          material={materials.stone_lime_white_01_m_0006}
        />
        <mesh


          geometry={nodes.Object_50.geometry}
          material={materials.stone_lime_white_01_m_0007}
        />
        <mesh


          geometry={nodes.Object_51.geometry}
          material={materials.stone_lime_white_01_m_0008}
        />
        <mesh


          geometry={nodes.Object_52.geometry}
          material={materials.stone_lime_white_01_m_0009}
        />
        <mesh


          geometry={nodes.Object_53.geometry}
          material={materials.stone_lime_white_01_m_0010}
        />
        <mesh


          geometry={nodes.Object_54.geometry}
          material={materials.stone_sand_01_m_0001}
        />
        <mesh


          geometry={nodes.Object_55.geometry}
          material={materials.stone_sand_01_m_0002}
        />
        <mesh


          geometry={nodes.Object_56.geometry}
          material={materials.stone_sand_01_m_0003}
        />
        <mesh


          geometry={nodes.Object_57.geometry}
          material={materials.stone_sand_01_m_0004}
        />
        <mesh


          geometry={nodes.Object_58.geometry}
          material={materials.stone_sand_01_m_0005}
        />
        <mesh


          geometry={nodes.Object_59.geometry}
          material={materials.stone_sand_01_m_0006}
        />
        <mesh


          geometry={nodes.Object_60.geometry}
          material={materials.stone_sand_01_m_0007}
        />
        <mesh


          geometry={nodes.Object_61.geometry}
          material={materials.stone_sand_01_m_0008}
        />
        <mesh


          geometry={nodes.Object_62.geometry}
          material={materials.wood_board_grey_01_m_0001}
        />
        <mesh


          geometry={nodes.Object_63.geometry}
          material={materials.wood_board_grey_01_m_0003}
        />
        <mesh


          geometry={nodes.Object_64.geometry}
          material={materials.wood_board_grey_01_m_0004}
        />
        <mesh


          geometry={nodes.Object_65.geometry}
          material={materials.wood_board_grey_01_m_0005}
        />
        <mesh


          geometry={nodes.Object_66.geometry}
          material={materials.wood_board_grey_01_m_0006}
        />
        <mesh


          geometry={nodes.Object_67.geometry}
          material={materials.wood_board_grey_01_m_0007}
        />
        <mesh


          geometry={nodes.Object_68.geometry}
          material={materials.wood_board_grey_01_m_0008}
        />
        <mesh


          geometry={nodes.Object_69.geometry}
          material={materials.wood_board_grey_01_m_0009}
        />
        <mesh


          geometry={nodes.Object_70.geometry}
          material={materials.wood_board_grey_01_m_0010}
        />
        <mesh


          geometry={nodes.Object_71.geometry}
          material={materials.wood_board_grey_01_m_0012}
        />
        <mesh


          geometry={nodes.Object_72.geometry}
          material={materials.wood_board_grey_01_m_0013}
        />
        <mesh


          geometry={nodes.Object_73.geometry}
          material={materials.wood_board_grey_01_m_0014}
        />
        <mesh


          geometry={nodes.Object_74.geometry}
          material={materials.wood_board_red_01_m_0001}
        />
        <mesh


          geometry={nodes.Object_75.geometry}
          material={materials.wood_board_red_01_m_0002}
        />
        <mesh


          geometry={nodes.Object_76.geometry}
          material={materials.wood_board_red_01_m_0003}
        />
        <mesh


          geometry={nodes.Object_77.geometry}
          material={materials.wood_board_red_01_m_0004}
        />
        <mesh


          geometry={nodes.Object_78.geometry}
          material={materials.wood_board_red_01_m_0005}
        />
        <mesh


          geometry={nodes.Object_79.geometry}
          material={materials.wood_board_red_01_m_0006}
        />
        <mesh


          geometry={nodes.Object_80.geometry}
          material={materials.wood_board_red_01_m_0007}
        />
        <mesh


          geometry={nodes.Object_81.geometry}
          material={materials.wood_board_red_01_m_0008}
        />
        <mesh


          geometry={nodes.Object_82.geometry}
          material={materials.wood_board_red_01_m_0009}
        />
        <mesh


          geometry={nodes.Object_83.geometry}
          material={materials.wood_board_red_01_m_0010}
        />
        <mesh


          geometry={nodes.Object_84.geometry}
          material={materials.wood_shindle_grey_02_m_0001}
        />
        <mesh


          geometry={nodes.Object_85.geometry}
          material={materials.wood_shindle_grey_02_m_0002}
        />
        <mesh


          geometry={nodes.Object_86.geometry}
          material={materials.wood_shindle_grey_02_m_0003}
        />
        <mesh


          geometry={nodes.Object_87.geometry}
          material={materials.wood_shindle_grey_02_m_0004}
        />
        <mesh


          geometry={nodes.Object_88.geometry}
          material={materials.wood_shindle_grey_02_m_0005}
        />
        <mesh


          geometry={nodes.Object_89.geometry}
          material={materials.wood_shindle_grey_02_m_0006}
        />
        <mesh


          geometry={nodes.Object_90.geometry}
          material={materials.wood_shindle_grey_02_m_0007}
        />
        <mesh


          geometry={nodes.Object_91.geometry}
          material={materials.wood_shindle_grey_02_m_0008}
        />
        <mesh


          geometry={nodes.Object_92.geometry}
          material={materials.wood_shindle_grey_02_m_0009}
        />
        <mesh


          geometry={nodes.Object_93.geometry}
          material={materials.wood_shindle_grey_02_m_0010}
        />
        <mesh


          geometry={nodes.Object_94.geometry}
          material={materials.wood_shindle_grey_02_m_0011}
        />
        <mesh


          geometry={nodes.Object_95.geometry}
          material={materials.wood_shindle_grey_02_m_0012}
        />
        <mesh


          geometry={nodes.Object_96.geometry}
          material={materials.wood_shindle_grey_02_m_0013}
        />
        <mesh


          geometry={nodes.Object_97.geometry}
          material={materials.wood_shindle_grey_02_m_0014}
        />
        <mesh


          geometry={nodes.Object_98.geometry}
          material={materials.wood_shindle_grey_02_m_0015}
        />
        <mesh


          geometry={nodes.Object_99.geometry}
          material={materials.wood_shindle_grey_02_m_0016}
        />
      </a.group>
    </a.group>
  );
};

export default Castle;

