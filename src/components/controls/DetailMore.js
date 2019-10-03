import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function DetailMore(props) {
  const detailMoreOption = (
    <>
      <TextField
        tabIndex="-1"
        id="standard-read-only-input"
        defaultValue={props.label}
        margin="normal"
        fullWidth={true}
        style={{
          padding: "0px 25px 0px 10px",
          width: "95%",
          background: "none"
        }}
        InputProps={{
          readOnly: true,
          startAdornment: (
            <InputAdornment position="start">
              <ExpandMoreIcon />
            </InputAdornment>
          )
        }}
      />
    </>
  );
  return detailMoreOption;
}
