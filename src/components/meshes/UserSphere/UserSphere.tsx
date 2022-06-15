import { useFrame, useLoader } from "@react-three/fiber"
import { FC, useEffect, useRef } from "react"
import { Mesh, TextureLoader, Vector2 } from "three"
import face from "../../../assets/face.jpg"

export const UserSphere: FC<any> = () => {

  const user = useRef<Mesh>(null)

  useFrame(({ camera }) => {
    user.current!.rotation.x = (camera.rotation.x / 1.6);
    user.current!.rotation.y = (camera.rotation.y / 1.6) - 1.4;
  })
  

  const faceTexture = useLoader(TextureLoader, face)
  faceTexture.offset = new Vector2(0, 0);

  return (
    <mesh
      ref={user}  
      position={[0, 0, -5]}
      rotation={[0, -1.4, 0]}
    >
      <sphereBufferGeometry args={[1.6, 100, 100]} />
      <meshStandardMaterial map={faceTexture}/>
    </mesh>
  )
}
