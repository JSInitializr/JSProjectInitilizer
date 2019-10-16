import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    light: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    if (state.light) {
      document.getElementById("body").className = "light";
    } else {
      document.getElementById("body").className = "dark";
    }
  };

  const IOSSwitch = withStyles(theme => ({
    root: {
      width: 50,
      height: 24,
      padding: 0,
      margin: theme.spacing(1)
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(25px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#f50057",
          opacity: 1,
          border: "none"
        }
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff"
      }
    },
    thumb: {
      width: 22,
      height: 22
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"])
    },
    checked: {},
    focusVisible: {}
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
        {...props}
      />
    );
  });

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <IOSSwitch
            checked={state.light}
            onChange={handleChange("light")}
            value="light"
          />
        }
        label={state.light ? "Dark UI" : "Light UI"}
      />
    </FormGroup>
  );
}
