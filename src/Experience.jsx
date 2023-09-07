import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Suspense } from 'react'


import HelmetModel from './helmetComponent'
import HamburgerModel from './hamburger'
import PlaceHolder from './placeholder'

export default function Experience()
{
    
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        {/* adding the model to the scene */}
        {/* for lazy loading use suspense tag. Fallback will display a red box before the model is loaded */}
        <Suspense
            fallback={ <PlaceHolder position-y={0.5} scale={[2,3,2]}/>}
        >
            <HelmetModel/>
            
        </Suspense>

        <Suspense
            fallback = { <PlaceHolder position-y={-1} position-x = {2} scale={1}/>}
            >
            <HamburgerModel/>
            </Suspense>


        <mesh receiveShadow position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}