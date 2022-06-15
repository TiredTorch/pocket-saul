import { FC } from "react"
import { Text } from "@react-three/drei"

export const CanvasTitle: FC<any> = ({ children }) => {

  return (
    <Text
      position={[0, 5, -13]}
      scale={[10, 10, 10]}
      color="black" // default
      anchorX="center" // default
      anchorY="middle" // default
    >
      {children}
    </Text>
  )
}
