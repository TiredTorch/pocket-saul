import { Box } from "@mui/material"
import { SideBar } from "./components/SideBar/SideBar"
import "@fontsource/kaushan-script"
import { MainScene } from "./components/MainScene/MainScene"

export const App = () => {
  return (
    <Box
      component={"div"}
      sx={{
        maxWidth: "100vw",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <SideBar />
      <MainScene />
    </Box>
  )
}
