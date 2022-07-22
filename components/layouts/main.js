import Head from 'next/head'
import Navbar from '../navbar'
import {Box, Container} from '@chakra-ui/react'

import React, { useRef, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

import {motion} from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

function Model({ url }) {
    const gltf = useLoader(GLTFLoader, url)
    return <primitive object={gltf.scene} dispose={null} />;
  }

const Lights = () => {
    return (
      <>
        {/* Ambient Light illuminates lights for all objects */}
        <ambientLight intensity={0.3} />
        {/* Diretion light */}
        <directionalLight position={[100, 100, 100]} intensity={0.5} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Spotlight Large overhead light */}
        <spotLight intensity={1} position={[1, 1, 1]} castShadow />
      </>
    );
  };

const HTMLContent = ({
    modelPath,
  }) => {
    const ref = useRef();
    return (
        <mesh ref={ref} position={[3, -2.5, 0]}>
            <Model url={modelPath} />
        </mesh>
    );
  };

const Main = ({ children, router }) => {
    const domContent = useRef();

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Rafa's Portfolio</title>
            </Head>

            <Navbar path = {router.asPath}/>

            <Container maxW="container.md" pt={14}>
                <StyledDiv
                    initial = {{y: 10, opacity: 0}}
                    animate = {{y: 0, opacity: 1}}
                    transition = {{duration: 0.8, delay: 0}}
                    mb={0}
                    align="center"
                    style = {{ margin: 'auto', height: '40vh', width: '100%', textAlign: 'center'}}
                    >
                    <Canvas
                        camera={{ position: [20, 10, 20], fov:25}}
                    >
                        <Lights />
                        <Suspense fallback={null}>
                        <HTMLContent
                            domContent={domContent}
                            bgColor='#f15946'
                            modelPath='/MYSETUP.glb'
                        >
                        </HTMLContent>
                        </Suspense>
                    </Canvas>
                </StyledDiv>
                {children}
            </Container>
        </Box>
    )
}

export default Main