import { Clone, useGLTF } from '@react-three/drei'

export default function HamburgerModel(){
    
    const model = useGLTF("./hamburger-draco.glb")
    
    
    return (
    <>
        <Clone object={model.scene} scale={0.2} castShadow position-y={-1} position-x = {-2}/>
        <Clone object={model.scene} scale={0.2} castShadow position-y={-1} position-x = {2}/>
        <Clone object={model.scene} scale={0.2} castShadow position-y={-1} position-x = {4}/>
    </>)
}

//to preload the objects into memory 
useGLTF.preload("./hamburger-draco.glb")