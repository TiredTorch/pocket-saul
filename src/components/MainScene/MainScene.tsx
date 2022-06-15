import { Box as MuiBox } from "@mui/material"
import { OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { Suspense } from "react"
import { PerspectiveCamera } from "three"
import { Room } from "../meshes/Room/Room"
import { mainSceneStyles } from "./MainScene.styles"

export const MainScene = () => {

  return (
    <MuiBox
      component={"div"}
      sx={mainSceneStyles.root}
    >
      <Canvas 
        style={mainSceneStyles.canvas}
        camera={{far: 200, near: 1}}
      >
        <OrbitControls 
          enableZoom={false}
          rotateSpeed={.1}
        />
        <Suspense fallback={null}>
          <Room />
        </Suspense>

        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
      </Canvas>
    </MuiBox>
  )
}
