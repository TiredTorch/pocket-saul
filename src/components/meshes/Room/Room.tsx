import { useLoader } from "@react-three/fiber";
import { useRef } from "react"
import { BackSide, TextureLoader } from "three";
import background from "../../../assets/wall.jpg"

export const Room = () => {
  const room = useRef(null)

  const texture = useLoader(TextureLoader, background)

  return (
    <mesh
      ref={room}
      position={[0, 2, -5]}
    >
      <boxGeometry 
        attach={"geometry"} 
        args={[20, 10, 20]} 
      />
      <meshBasicMaterial
        color={0xffffff}
        side={BackSide}
        map={texture}
      />
    </mesh>
  )
}
