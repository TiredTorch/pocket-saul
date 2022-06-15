import { useRef } from "react"
import { BackSide, Mesh, MeshStandardMaterial, RepeatWrapping, TextureLoader } from "three";
import wall from "../../../assets/wall.jpg"
import floor from "../../../assets/floor.jpg"

export const Room = () => {
  const room = useRef<Mesh>(null)

  const loader = new TextureLoader();

  const materials = [
    wall, wall, wall, floor, wall, wall
  ].map((item) => {
    const texture = loader.load(item);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    if (item === floor) {
      texture.repeat.set(7, 7)
    }
    const material = new MeshStandardMaterial({ map: texture, side: BackSide, });
    return material;
  })

  return (
    <mesh
      ref={room}
      position={[0, 2, -5]}
      material={materials}
    >
      <boxBufferGeometry
        attach={"geometry"}
        args={[20, 10, 20]}
      />
    </mesh>
  )
}
