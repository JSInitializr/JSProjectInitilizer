import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/js.png';
import Switch from './switch';
import Help from './helpMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img className= {classes.menuLogo} src={logo} alt="Logo" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            JS Project Generator
          </Typography>
          <Switch/>
          <Button color="inherit">Github</Button>
          <Help/>
        </Toolbar>
      </AppBar>
    </div>
  );
}