import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input:{
    color:'white',
  },
  textField: {
    color: 'white',
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
  label:{
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '100%',
    color: 'red'
  }
}));



export default function BasicTextField(props) {
  const classes = useStyles();
  return (
    <TextField
      id={props.id}
      label={props.label}
      value={props.value}
      className={classes.textField}
      onChange={props.handleChange}
      margin="normal"
      placeholder={props.placeholder}
      InputLabelProps={{
        shrink: true,
        color: 'white',
      }}
      InputProps={{
        className: classes.input,
      }}
    />
  );
}
