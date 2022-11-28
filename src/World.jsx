import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { TextureLoader } from "three/src/loaders/TextureLoader";

export function World () {
    const result = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/models/world.glb"
    );
    
// const colorMap = useLoader (
//     TextureLoader,
//     process.env.PUBLIC_URL + "/textures/racing_world.png"
// )

// useEffect(() => {
//     colorMap.anisotropy = 16;
// }, [colorMap]);

let geometry = result.scene.children[0].geometry;

return (
    <mesh>
        <primitive object={geometry} attach={"geometry"} />
        <meshBasicMaterial
            toneMapped={false} 
            // map={colorMap}
        />
    </mesh>
)
}