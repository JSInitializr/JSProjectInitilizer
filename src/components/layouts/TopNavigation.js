import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Switch from "./switch";
import Logo from "./Logo";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HelpMenu from "../controls/Help";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    color: "#222"
  },
  menuButton: {
    marginRight: theme.spacing(0.5)
  },
  ahref: {
    textAlign: "center",
    textDecoration: "none",
    color: "white"
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  appBarStyle: {
    backgroundColor: "initial",
    color: "#222",
    boxShadow: "none"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
}));
export default function TopNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarStyle}>
        <Box p={1}>
          <Grid container >
            <Grid item xs={3} md={3} style={{ alignSelf: "flex-end" }}>
              <div>
                <Logo />
              </div>
            </Grid>
            <Grid item xs={9} md={9}>
              <Box
                display="flex"
                justifyContent="flex-end"
                style={{ marginTop: "1%" }}
              >
                <Switch />
                <HelpMenu />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
    </div>
  );
}
