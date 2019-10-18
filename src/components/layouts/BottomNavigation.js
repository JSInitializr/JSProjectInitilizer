import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { BallClipRotate } from 'react-pure-loaders';

const useStyles = makeStyles(theme => ({
  button: {
    alignItems: "center",
    justifyContent: "center"
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "initial",
    color: "#222",
    boxShadow: "none"
  }
}));

export default function BottomNavigation(props) {
  const classes = useStyles();

  const buttonOrSpinner = props.downloadingProject ? (<div>
    <Typography
      style={{ margin: "0 0px 0px 0px" }}
      variant="body2"
      gutterBottom
    >
      Hang tight, preparing project...
    </Typography>
    <BallClipRotate style={{ margin: '10px' }}
      color={'#f50057'}
      loading={true}
    />
  </div>) : (<Button
    onClick={props.submitAction}
    variant="contained"
    color="default"
    className="btm-btn"
  >
    Generate the project
                  <CloudDownloadIcon />
  </Button>);

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Box p={1} style={{ paddingBottom: "0px" }}>
          <Grid container>
            <Grid item xs={3} md={3} style={{ alignSelf: "flex-end" }}>
              <Box justifyContent="flex-start">
                <Typography
                  style={{ margin: "0 8px 18px 33px" }}
                  variant="body2"
                  gutterBottom
                >
                  © 2019 JS Project Initializer. Bootstrap Quick development.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1} md={9} className="btm-foot">

              <Box display="flex" justifyContent="left" className="btm-box">
                {buttonOrSpinner}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
    </>
  );
}
