import { Suspense, useEffect, useState } from "react"; 
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Track from "./Track";
import Car from "./Car";
import Ground from "./Ground";


export function Scene() {
    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([28, 24, 36])

    useEffect(() => {
        function keydownHandler(e) {
            if (e.key == "k") {
                if (thirdPerson) setCameraPosition([28, 24, 36 + Math.random() * 0.01]);
                setThirdPerson(!thirdPerson);
            }
        }

        window.addEventListener("keydown", keydownHandler);
        return () => window.removeEventListener("keydown", keydownHandler);
    }, [thirdPerson])

    return (
        <Suspense fallback={null}>
            <Environment 
                files={process.env.PUBLIC_URL + "/textures/envmap.hdr"}
                background = {"both"}
            />

            <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
            {!thirdPerson && 
                (<OrbitControls target = {[-2.5, -0.7, 0.05]} />
            )}

            <Car thirdPerson={thirdPerson} />
            <Ground />
            <Track />

        </Suspense>
    );
}