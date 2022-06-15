import { Box as MuiBox } from "@mui/material"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { CameraController } from "../CameraController/CameraControler"
import { CanvasTitle } from "../CanvasTitle/CanvasTitle"
import { Room } from "../meshes/Room/Room"
import { UserSphere } from "../meshes/UserSphere/UserSphere"
import { mainSceneStyles } from "./MainScene.styles"

export const MainScene = () => {

  return (
    <MuiBox
      component={"div"}
      sx={mainSceneStyles.root}
    >
      <Canvas
        style={mainSceneStyles.canvas}
      >
        <CameraController />
        <Suspense fallback={null}>
          <CanvasTitle>
            Sanbek's Home
          </CanvasTitle>
          <Room />
          <UserSphere 
            cameraX={1}
            cameraY={1}
          />
        </Suspense>
        <ambientLight position={[0, -6, -1]} intensity={.6}/>
        <pointLight position={[0, 6, -2]} intensity={.5}/>
      </Canvas>
    </MuiBox>
  )
}
