import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: 650,
    minHeight: 200
  },
  tab:{
    maxWidth:100,
    position: "relative"
  }
}));

export default function LanguageSelection() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>

      <span>
        <h4> Language </h4>
      
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="action tabs example"
        >
          <Tab label="React" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="Typescript" {...a11yProps(1)} />
          <Tab label="Angular" {...a11yProps(2)} />
          <Tab label="Node js server" {...a11yProps(3)} />
        </Tabs>
        </span>
    </div>
  );
}
