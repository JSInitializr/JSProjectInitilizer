import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Switch from './switch';
import Help from './helpMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    float:'right',
    backgroundColor:'transparent'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuLogo:{
    width:'50px',
    height: '50px'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Toolbar>
          <Switch/>
          <Button color="inherit">Github</Button>
          <Help/>
        </Toolbar>
    </div>
  );
}