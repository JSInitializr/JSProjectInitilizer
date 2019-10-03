import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    color:'white',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function BasicTextField(props) {
  const classes = useStyles();
  return (
      <TextField
        style={props.style}
        id={props.id}
        label={props.label}
        className={classes.textField}
        value= {props.value}
        onChange={props.handleChange}
        margin="normal"
        placeholder={props.placeholder}
        InputLabelProps={{
            shrink: true,
            color:'white',
          }}
      />
  );
}
