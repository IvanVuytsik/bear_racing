import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef, useEffect } from "react"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const debug = true;

export function Ramp() {
  const result = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/ramp.glb").scene;
  
  useEffect(() => {
        result.scale.set(1, 1, 1);
        result.children[0].position.set(3, 3.6, 12)
    }, [result]);

  const geometry = result.children[0].geometry;
  const vertices = geometry.attributes.position.array;
  const indices  = geometry.index.array;
   
  const [ref] = useTrimesh(
    () => ({
      args: [vertices, indices],
      mass: 0,  
      type: "Static",
    }),
    useRef(null)
  );

  return (
    debug && (
        <>
            <primitive object={result} position={ref.position}/>
            <mesh position={[3, 3.6, 12]}>
                <boxGeometry  />
                <meshBasicMaterial transparent={true} opacity={0.25} />
            </mesh>
        </>
    ) 
  );
}