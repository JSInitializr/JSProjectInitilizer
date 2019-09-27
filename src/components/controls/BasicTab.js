import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './css/tab.css';


function a11yProps(id,index) {
  return {
    id: `${id}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}



export default function BasicTab(props) {
  
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
    if(props.handleChange){
      props.handleChange(event,newValue);
    }
  }


  const tabs = () => {
    const t = props.tabs.map((tab) => {
      return <Tab style={{textTransform:'capitalize',fontWeight: 'bold',color: '#222'}} label={tab} {...a11yProps(tab,0)} />
    })
    return t;
  }
  return (
    <div >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="primary"
        aria-label="action tabs example"
      >
        {tabs()}
      </Tabs>
    </div>
  );
}
