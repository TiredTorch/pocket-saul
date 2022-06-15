import { useRef, useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { ReactComponent as Arrow } from "../../assets/sideBarArrow.svg"
import { sideBarStyles } from "./SideBar.styles"
import ReactAudioPlayer from "react-audio-player"

const sound = require("./../../assets/SaulTheme.mp3")

export const SideBar = () => {
  const soundPad = useRef<ReactAudioPlayer>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [activeSideBar, setActiveSideBar] = useState(true);

  const toggleMusicStatus = () => {
    if (soundPad.current && soundPad.current.audioEl.current) {
      soundPad.current.audioEl.current.currentTime = 0;
      musicPlaying ? soundPad.current.audioEl.current?.pause() : soundPad.current.audioEl.current?.play();
      setMusicPlaying(!musicPlaying);
    }
  }

  return (
    <Box
      component={"div"}
      sx={sideBarStyles.root}
      className={activeSideBar ? "active" : ""}
    >
      <ReactAudioPlayer
        src={sound}
        volume={.03}
        loop
        ref={soundPad}
      />
      <Typography sx={sideBarStyles.text}>
        SCP 47: Sanbek Sphere
      </Typography>
      <Box
        component={"div"}
        sx={sideBarStyles.mainWrapper}
      >
        
      </Box>
      <Box
        component={"div"}
        sx={sideBarStyles.tab}
        onClick={() => {
          setActiveSideBar(!activeSideBar)
          toggleMusicStatus()
        }}
        className={activeSideBar ? "active" : ""}
      >
        <Arrow
          style={sideBarStyles.arrow}
        />
      </Box>
    </Box>
  )
}
