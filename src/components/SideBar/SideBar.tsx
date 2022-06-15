import { useState } from "react"
import { Box } from "@mui/material"
import { ReactComponent as Arrow } from "../../assets/sideBarArrow.svg"
import { sideBarStyles } from "./SideBar.styles"

export const SideBar = () => {

  const [activeSideBar, setActiveSideBar] = useState(true)

  return (
    <Box
      component={"div"}
      sx={sideBarStyles.root}
      className={activeSideBar ? "active" : ""}
    >
      <Box
        component={"div"}
        sx={sideBarStyles.tab}
        onClick={() => setActiveSideBar(!activeSideBar)}
        className={activeSideBar ? "active" : ""}
      >
        <Arrow
          style={sideBarStyles.arrow}
        />
      </Box>
    </Box>
  )
}
