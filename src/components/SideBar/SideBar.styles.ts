import wall from "../../assets/wall.jpg"

export const sideBarStyles = {
  root: {
    position: "absolute",
    right: "0",
    height: "100vh",
    width: "45vw",
    background: `url(${wall})`,
    borderRadius: "30px 0 0 30px",
    transition: "all .4s",
    boxSizing: "border-box",
    zIndex: 999,
    "&.active": {
      transition: "all .4s",
      right: "-40vw"
    }
  },
  tab: {
    width: "7vh",
    height: "7vh",
    background: `url(${wall})`,
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(-40%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "invert(30px)",

    "&.active": {
      "svg": {
        transition: "all .2s",
        transform: "rotateZ(180deg)",
      }
    }
  },
  arrow: {
    width: "40%",
    transition: "all .2s",
  },
  "html": {
    background: "red"
  }
}