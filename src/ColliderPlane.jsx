import { useBox } from "@react-three/cannon";

const debug = true;

export function ColliderPlane({ position, scale, rotation }) {
    useBox(() => ({
        args: scale,
        position,
        type: "Static",
    }));

    return (
        debug && (
            <mesh position={position} rotation={rotation}>
                <planeGeometry args={scale} />
                <meshBasicMaterial transparent={true} opacity={0.25} />
            </mesh>
        ) 
    );
}

