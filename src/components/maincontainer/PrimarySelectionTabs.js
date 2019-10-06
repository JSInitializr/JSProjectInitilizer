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

  handleTabChange = (event, category) => {
    const expandableTab = this.props.tabs.find(tabItem => {
      return (
        tabItem.childTab && tabItem.childTab.whichTab === event.currentTarget.id
      );
    });

    const expandedTab =
      !expandableTab &&
      this.props.tabs.find(tabItem => {
        return (
          tabItem.childTab &&
          tabItem.childTab.options.find(childTabItem => {
            return childTabItem === event.currentTarget.id;
          })
        );
      });

    const tabs = this.props.tabs;
    const updatedTabs = tabs.map(tabItem => {
      if (tabItem === expandableTab) {
        if (tabItem.label == category) {
          return {
            ...tabItem,
            childTab: { ...tabItem.childTab, expanded: true },
            selectedValue: event.currentTarget.id
          };
        }
        return tabItem;
      } else if (tabItem === expandedTab) {
        if (tabItem.childTab.label === category) {
          return {
            ...tabItem,
            childTab: {
              ...tabItem.childTab,
              selectedValue: event.currentTarget.id
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
                selectedValue: event.currentTarget.id
              }
            : { ...tabItem, selectedValue: event.currentTarget.id };
        }
        return tabItem;
      }
    });
    this.props.updateTabs(updatedTabs);
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
            />
          </h4>
        </Grid>
      </>
    );
  };

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
      <>
        <Grid container spacing={0}>
          {!tabItem.childTab
            ? this.setupGridRow(tabItem)
            : this.getParentChildTab(tabItem)}
        </Grid>
      </>
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
