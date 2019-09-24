import React, { Component } from 'react';
import Card from './Card';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
import DetailMore from '../controls/DetailMore';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BasicTab from '../controls/BasicTab';
class Dependencies extends Component {

  state={
    tabs: ["Search","Select"]
  }

  useStyles = () => {
    return makeStyles(theme => ({
      root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    }))
  };

  dependencyList = (tag) => {
    let newPackages = {};
    for (const category in this.props.dependencyList) {
      const pkgs = this.props.dependencyList[category];
      const filteredPkgs = pkgs.filter((pkg) => {
        return pkg.tag && pkg.tag.indexOf(tag) > -1;
      });
      newPackages[category] = filteredPkgs;
    }
    return newPackages;
  }


  detailMoreOptionControl = (topic) => {
    return <DetailMore label={topic}/>
  }

  getDetailPanel = (topic) => {
    return (<>
      <Grid container spacing={2}>
        {this.dependencyList('react')[topic].map(t => <Grid key={t.label} item xs={4} sm={0}><Card label={t.label} desc={t.desc} /></Grid>)}
      </Grid>
    </>);

  }

  getTabs = () => {
   this.state.tabs.map(tabItem => {
    return (  <BasicTab tabTitle={tabItem} handleChange={(event, newValue) => this.handleTabChange(event, newValue)} tabs={this.state.tabs} />);
    });
}
  render() {

    if (!this.props.dependencyList) {
      return (<div><h1>No list here</h1></div>)
    }

    const arr = [];
    for (const topic in this.dependencyList('react')) {
      arr.push(<>
        <BasicExpansionPanel expanded={true} summaryPanel={this.detailMoreOptionControl(topic)} detailPanel={this.getDetailPanel(topic)} />
      </>)
    }
    
    return (<>
      {this.getTabs()}
      {arr}
    </>);
  }
}



  export default Dependencies;
