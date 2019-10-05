import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../assets/js.png";
import "../../styles/header.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginTop: "0px",
    marginLeft: "5px"
  },
  title: {
    flexGrow: 1
  },
  menuLogo: {
    marginTop: "-10px",
    width: "50px",
    height: "50px"
  }
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <p style={{ margin: "0px" }}>
      <div style={{ float: "left", width: "50px", height: "54px" }}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <img className={classes.menuLogo} src={logo} alt="Logo" />
        </IconButton>
      </div>
      <div>
        <h2 className="headerTitle">
         {`{ JS }`} project <span>generator</span>
        </h2>
      </div>
      <div>
        <h4 className="headerSubTitle">Bootstrap your application</h4>
      </div>
    </p>
  );
}
