import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';
import { Physics } from "@react-three/cannon";

const App = () => {
  return ( 
   <Canvas>
        <Physics broadphase="SAP" gravity={[0, -2.5, 0]}>
            <Scene />
        </Physics>
     </Canvas>
  )
}

export default App