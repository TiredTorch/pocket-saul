import { Container } from "@mui/material"
import { SideBar } from "./components/SideBar/SideBar"
import "@fontsource/kaushan-script"

export const App = () => {
  return (
    <Container 
      sx={{
        maxWidth: "100vw",
        maxHeight: "100vh",
        overflow: "hidden"
      }}
    >
      <SideBar />
    </Container>
  )
}
