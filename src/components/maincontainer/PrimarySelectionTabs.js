import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import BasicTab from "../controls/BasicTab";
import BasicExpansionPanel from "../controls/BasicExpansionPanel";
import "./css/Body.css";

class PrimarySelectionTabs extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldExpanded: false };
  }

  changeDataEvent = (value, category, recursiveUpdatedItems) => {
    if(value==='Typescript'){
      alert('This feature will be availiable in next release version.');
      return;
    }
    const expandableTab = this.props.tabs.find(tabItem => {
      return (
        tabItem.childTab && tabItem.childTab.whichTab === value
      );
    });

    const expandedTab =
      !expandableTab &&
      this.props.tabs.find(tabItem => {
        return (
          tabItem.childTab &&
          tabItem.childTab.options.find(childTabItem => {
            return childTabItem === value;
          })
        );
      });

    const tabs = recursiveUpdatedItems ? recursiveUpdatedItems :this.props.tabs;
    const updatedTabs = tabs.map(tabItem => {
      if (tabItem === expandableTab) {
        if (tabItem.label === category) {
          return {
            ...tabItem,
            childTab: { ...tabItem.childTab, expanded: true },
            selectedValue: value
          };
        }
        return tabItem;
      } else if (tabItem === expandedTab) {
        if (tabItem.childTab.label === category) {
          return {
            ...tabItem,
            childTab: {
              ...tabItem.childTab,
              selectedValue: value
            }
          };
        }
        return tabItem;
      } else {
        if (tabItem.label === category) {
          return tabItem.childTab
            ? {
                ...tabItem,
                childTab: { ...tabItem.childTab, expanded: false },
                selectedValue: value
              }
            : { ...tabItem, selectedValue: value };
        }
        return tabItem;
      }
    });

    if(value === 'Angular'){
      this.changeDataEvent('Javascript','Language',updatedTabs);
    }else if(value === 'Node Js Server'){
      this.changeDataEvent('Javascript','Language', updatedTabs);
    }else if(value === 'VS Code Extension'){
      this.changeDataEvent('Javascript','Language', updatedTabs);
    }else{
      this.props.updateTabs(updatedTabs);
    }
  }

  handleTabChange = (event, category) => {
    this.changeDataEvent(event.currentTarget.id,category,null);
  };

  setupGridRow = item => {
    return (
      <>
        <Grid item xs={3} md={3} style={{ alignSelf: "flex-end" }}>
          <div>
            <h4 className="gridLable">{item.label}</h4>
          </div>
        </Grid>
        <Grid
          item
          xs={9}
          md={9}
          style={{ textAlignLast: "start", paddingLeft: "8px" }}
        >
          <h4 className="gridTitle">
            <BasicTab
              tabTitle={item}
              category={item.label}
              handleChange={(event, newValue) =>
                this.handleTabChange(event, newValue)
              }
              tabs={item.options}
              selectedIndex={this.indexOfSelectedTabValue(item.options,item.selectedValue)}
            />
          </h4>
        </Grid>
      </>
    );
  };

  indexOfSelectedTabValue = (tabs,value) => {
    let selectedIndex = 0;
    for(let i = 0; i< tabs.length;i++){
      if(value === tabs[i]){
        break;
      }
      selectedIndex++;
    }
    return selectedIndex;
  }

  getParentChildTab = item => {
    const t = (
      <>
        <Grid container spacing={0}>
          {this.setupGridRow(item)}
        </Grid>
      </>
    );

    return (
      <Grid item xs={12}>
        <BasicExpansionPanel
          expanded={item.childTab.expanded}
          summaryPanel={t}
          detailPanel={this.getTab(item.childTab)}
        />
      </Grid>
    );
  };

  getTab = tabItem => {
    
    const tab = (
        <Grid key={tabItem.label} container spacing={0}>
          {!tabItem.childTab
            ? this.setupGridRow(tabItem)
            : this.getParentChildTab(tabItem)}
        </Grid>
    );
    return tab;
  };

  getTabs() {
    if (!this.props.tabs) {
      return (
        <div>
          <h1>No tabs</h1>
        </div>
      );
    }
    return this.props.tabs.map(tabItem => {
      return this.getTab(tabItem);
    });
  }

  render() {
    return <>{this.getTabs()}</>;
  }
}

export default PrimarySelectionTabs;
