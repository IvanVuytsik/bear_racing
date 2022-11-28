import { useEffect, useRef } from 'react';
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ColliderBox } from './ColliderBox'; 
import { Ramp } from './Ramp';

export default function Track() {
    let mesh = useLoader(
        GLTFLoader, 
        process.env.PUBLIC_URL + "/models/world.glb"
    ).scene

    useEffect(() => {
        mesh.scale.set(1, 1, 1);
        mesh.children[0].position.set(0, 0, 0)
    }, [mesh]);
 
    return (
        <>
            <primitive object={mesh} rotation={[0, 0, 0]}/>

            <ColliderBox position={[0.7, 4.3, -6.6]} scale ={[0.5, 2, 0.5]} />
            <ColliderBox position={[0.7, 4.3, -9.4]} scale ={[0.5, 2, 0.5]} />

            <ColliderBox position={[5.1, 4.3, 8.2]} scale ={[0.5, 2, 0.5]} />
            <ColliderBox position={[5.1, 4.3, 11]} scale ={[0.5, 2, 0.5]} />

            <ColliderBox position={[2.25, 4.3, -4.2]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[4.55, 4.3, -3.75]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[7.55, 4.3, -4.25]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[5.85, 4.3, -2.85]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[5.85, 4.3, -5.35]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[5.85, 4.3, -1.35]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[3.95, 4.3, -1.35]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[7.55, 4.3, -1.35]} scale ={[0.7, 2.1, 0.7]} />

            <ColliderBox position={[14.15, 4.3, -1.4]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[14.55, 4.3, -3.55]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[8.25, 4.3, -11.35]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[11.25, 4.3, -11.55]} scale ={[0.7, 2.1, 0.7]} />

            <ColliderBox position={[3.8, 6.8, -10.8]} scale ={[6, 7, 3]} />

            <ColliderBox position={[-4.95, 4.3, -5.05]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[-4.25, 4.3, -8.55]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[-5.25, 4.3, -7.15]} scale ={[0.7, 2.1, 0.7]} />

            <ColliderBox position={[5.25, 4.3, 0.15]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[7.8, 4.3, 0.45]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[5.9, 4.3, 5.8]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[5.15, 4.3, 3.6]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[5.8, 4.3, 2.1]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[8, 4.3, 3.1]} scale ={[0.7, 2.1, 0.7]} />
            <ColliderBox position={[7, 4.3, 4.4]} scale ={[0.7, 2.1, 0.7]} />

            <ColliderBox position={[-1.3, 3.6, 5.4]} scale ={[2.5, 0.5, 0.5]} />
            <ColliderBox position={[-2.9, 3.6, 5.8]} scale ={[0.5, 0.5, 0.5]} />
            <ColliderBox position={[-4.1, 3.6, 6.2]} scale ={[1.5, 0.5, 0.5]} />
            <ColliderBox position={[-5.6, 3.6, 6.6]} scale ={[1.5, 0.5, 0.5]} />
            <ColliderBox position={[-6.9, 3.6, 8.6]} scale ={[0.5, 0.5, 3]} />
            <ColliderBox position={[-4.4, 3.6, 10.6]} scale ={[2.8, 0.5, 0.5]} />
            <ColliderBox position={[-6.1, 3.6, 10.2]} scale ={[0.5, 0.5, 0.5]} />

            <ColliderBox position={[-3.7, 3.6, -5.5]} scale ={[0.5, 0.5, 3]} />
            <ColliderBox position={[-3.3, 3.6, -7.45]} scale ={[0.5, 0.5, 0.5]} />
            <ColliderBox position={[-3.3, 3.6, -3.4]} scale ={[0.5, 0.5, 0.5]} />

            <ColliderBox position={[4.7, 3.6, -9]} scale ={[3, 0.5, 0.5]} />    
            <ColliderBox position={[9.5, 3.6, -10.2]} scale ={[4, 0.5, 0.5]} /> 
            <ColliderBox position={[11.9, 3.6, -9.8]} scale ={[0.5, 0.5, 0.5]} /> 
            <ColliderBox position={[12.7, 3.6, -9.4]} scale ={[0.5, 0.5, 0.5]} /> 
            <ColliderBox position={[13.1, 3.6, -8.6]} scale ={[0.5, 0.5, 0.5]} /> 
            <ColliderBox position={[13.5, 3.6, -7.8]} scale ={[0.5, 0.5, 0.5]} /> 
            <ColliderBox position={[13.9, 3.6, -6.2]} scale ={[0.5, 0.5, 1.5]} /> 

            <ColliderBox position={[13.9, 3.6, 1.45]} scale ={[0.5, 0.5, 0.5]} /> 
            <ColliderBox position={[14.7, 3.6, 3.5]} scale ={[0.5, 0.5, 3.5]} /> 
            <ColliderBox position={[14.3, 3.6, 5.8]} scale ={[0.5, 0.5, 0.5]} />
            <ColliderBox position={[14.3, 3.6, 5.8]} scale ={[0.5, 0.5, 0.5]} />
            <ColliderBox position={[13.5, 3.6, 6.6]} scale ={[0.5, 0.5, 0.5]} />
            <ColliderBox position={[13.1, 3.6, 7.4]} scale ={[0.5, 0.5, 0.5]} />

            <ColliderBox position={[1.1, 3.6, 3.4]} scale ={[0.5, 0.5, 2.5]} />
            <ColliderBox position={[0.3, 3.6, 4.6]} scale ={[0.5, 0.5, 0.5]} />
            <ColliderBox position={[0.7, 3.6, 1.8]} scale ={[0.5, 0.5, 0.5]} />
            <ColliderBox position={[-0.1, 3.6, 1.4]} scale ={[0.5, 0.5, 0.5]} />
            <ColliderBox position={[-0.9, 3.6, 1]} scale ={[0.5, 0.5, 0.5]} />
            <ColliderBox position={[-1.7, 3.6, 0.6]} scale ={[0.5, 0.5, 0.5]} />

        </>
    );
}