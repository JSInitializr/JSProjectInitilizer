import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
    width: 650
  },
  tab: {
    position: "relative"
  }
}));

export default function LanguageSelection(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }


  const tabs = () => {
    const t = props.tabs.map((tab) => {
      return <Tab label={tab} {...a11yProps(0)} />
    })
    return t;
  }

  return (
    <div className={classes.root}>



      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="action tabs example"
      >
        {tabs()}
      </Tabs>

    </div>
  );
}
