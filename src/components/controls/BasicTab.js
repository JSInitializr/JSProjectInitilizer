import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./css/tab.css";
import SearchIcon from "@material-ui/icons/Search";
import ListIcon from "@material-ui/icons/List";

function a11yProps(id, index) {
  return {
    id: `${id}`,
    "aria-controls": `action-tabpanel-${index}`
  };
}

export default function BasicTab(props) {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
    if (props.handleChange) {
      props.handleChange(event, props.category ? props.category : newValue);
    } else {
    }
  }

  const tabIcon = icon => {
    switch (icon) {
      case "search":
        return <SearchIcon />;
      case "list":
        return <ListIcon />;
      default:
        return null;
    }
  };

  const tabs = () => {
    const t = props.tabs.map(tab => {
      if (tab.icon) {
        return (
          <Tab
            icon={tabIcon(tab.icon)}
            className="lang-tab"
            label={tab.label}
            {...a11yProps(tab, 0)}
          ></Tab>
        );
      }
      return <Tab className="lang-tab" label={tab} {...a11yProps(tab, 0)} />;
    });
    return t;
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        aria-label="action tabs example"
      >
        {tabs()}
      </Tabs>
    </div>
  );
}
