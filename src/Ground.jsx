import { useEffect, useRef } from 'react';
import { MeshReflectorMaterial } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { BufferAttribute } from "three";
import { usePlane } from "@react-three/cannon";

const Ground = () => {

    const [ref] = usePlane(
        () => ({
            type: 'Static',
            rotation: [-Math.PI / 2, 0, 0],
            position: [5, 3.4, 0]
        }), useRef(null)
    )

    const gridMap = useLoader (
        TextureLoader,
        process.env.PUBLIC_URL + '/textures/grid.png'
    )

    const alphaMap = useLoader (
        TextureLoader,
        process.env.PUBLIC_URL + '/textures/alpha-map.png'
    )

    const meshRef = useRef(null);
    useEffect(() => {
        var uvs = meshRef.current.geometry.attributes.uv.array;
        meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));
    }, [meshRef.current])

  return (
    <>
        <mesh ref={meshRef} 
        position={[5, 3.38, 0]} 
        rotation-x={-Math.PI * 0.5}
        rotation-z={-0.01} >
            <circleGeometry args={[20, 20, 70]} />
            <MeshReflectorMaterial 
                alphaMap={alphaMap}
                transparent={true}
                color={"#dab287"}
                envMapIntensity={0.15}
                metalness={0.05}
                roughness={0.2}

                dithering={true}
                blur={[1024, 512]}
                mixBlur={3}
                mixStrength={30}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRationBias={0.25}
                debug={0}
                refectionOffset={0.02}
            />
        </mesh>
    </>
  )
}

export default Ground