import { useEffect, useRef } from 'react';
import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useWheels } from './useWheels';
import { WheelDebug } from "./WheelDebug";
import { useControls } from './useControls';
import { Quaternion, Vector3 } from 'three';

export default function Car({ thirdPerson }) {
    let mesh = useLoader(
        GLTFLoader, 
        process.env.PUBLIC_URL + "/models/car.glb"
    ).scene

    const position = [3, 5, 9.5]
    const rotation = [0, 80.1, 0]
    const width = 0.4
    const height = 0.1
    const front = 0.3
    const wheelRadius = 0.1

    const chassisBodyArgs = [width, height, front * 2]
    const [chassisBody, chassisApi] = useBox(
        () => ({
            args: chassisBodyArgs,
            mass: 150,
            position, 
            rotation,
        }), useRef(null),
    )

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);
    const [vehicle, vehicleApi] = useRaycastVehicle(
        () => ({
            chassisBody,
            wheelInfos,
            wheels,
        }), useRef(null),
    )

    useControls(vehicleApi, chassisApi);

    useFrame((state) => {
        if(!thirdPerson) return;

        let position = new Vector3(0, 0, 0);
        position.setFromMatrixPosition(chassisBody.current.matrixWorld);

        let quanternion = new Quaternion(0, 0, 0, 0);
        quanternion.setFromRotationMatrix(chassisBody.current.matrixWorld);

        let wDir = new Vector3(0, 0, -1);
        wDir.applyQuaternion(quanternion);
        wDir.normalize();

        let cameraPosition = position.clone().add(
            wDir.clone().multiplyScalar(-6).add(
                new Vector3(-1, 0.6, 0.2)
            )
        );

        state.camera.position.copy(cameraPosition);
        state.camera.lookAt(position);
    });

    useEffect(() => {
        mesh.scale.set(0.2, 0.2, 0.2);
        mesh.children[0].position.set(0, -0.1, 0)
    }, [mesh]);

    return (
        <group ref={vehicle} name="vehicle">
            <group ref={chassisBody} name="chassisBody">
                <primitive object={mesh} rotation-y={Math.PI} position={[0, -0.1, 0]}/>
            </group>

            {/* <mesh ref={chassisBody}>
                <meshBasicMaterial transparent={true} opacity={0.3} />
                <boxGeometry args={chassisBodyArgs} />
            </mesh> */}

            <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
            <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
        </group>
    );
}