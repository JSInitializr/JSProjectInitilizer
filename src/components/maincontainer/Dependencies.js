import React, { Component } from 'react';
import DependencyCard from './Card';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
import DetailMore from '../controls/DetailMore';
import BasicTab from '../controls/BasicTab';
import SearchDependencies from './SearchDependencies';

class Dependencies extends Component {

  state = {
    tabs: ["Search", "Select"],
    showDependencies: false
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

  handleSelection = (cardId, category) => {
    const dependencyList = this.props.dependencyList;
    const updatedArr = dependencyList[category].map(item => {
      if (item.label === cardId) {
        return { ...item, value: !item.value };
      }
      return item;
    });
    const updatedList = { ...dependencyList }
    updatedList[category] = updatedArr;
    this.props.updateDependencyList(updatedList);
  }


  detailMoreOptionControl = (topic) => {
    return <DetailMore label={topic} />
  }

  getDetailPanel = (topic) => {
    return (<>
      <Grid container spacing={1}>
        {this.dependencyList('react')[topic].map(t => <Grid key={t.label} item xs={4} sm={0}>
          <DependencyCard isSelected={t.value} handleSelection={this.handleSelection} label={t.label} desc={t.desc} category={topic} />
        </Grid>)}
      </Grid>
    </>);
  }

  handleTabChange = (event, newValue) => {
    if (newValue) {
      this.setState({ showDependencies: true });
    } else {
      this.setState({ showDependencies: false });
    }
  }

  getSelectedTechnology = () => {
    switch (this.props.tabs[1].selectedValue) {
      case 'Angular':
        return 'angular';
      case 'React':
        return 'react'
      case 'Node js server':
        return 'nodejs'
      case 'React Native':
        return 'react-native'
      case 'VS Code Extension':
        return 'vs-code-extension'
      default:
        return null;
    }
  }

  setupDependencyList = () => {
    const arr = [];
    for (const topic in this.dependencyList(this.getSelectedTechnology())) {
      if (topic !== 'search_selection_item') {
        arr.push(<>
          <BasicExpansionPanel defaultExpanded={true} summaryPanel={this.detailMoreOptionControl(topic)} detailPanel={this.getDetailPanel(topic)} />
        </>)
      }
    }
    return arr;
  }

  render() {

    if (!this.props.dependencyList) {
      return (<div><h1>No list here</h1></div>)
    }

    return (<>
      <BasicTab tabTitle={"a"} handleChange={(event, newValue) => this.handleTabChange(event, newValue)} tabs={this.state.tabs} />
      {this.state.showDependencies ? this.setupDependencyList() : <SearchDependencies dependencies={this.props.dependencyList} updateDependencyList={this.props.updateDependencyList} />}
    </>);
  }
}

export default Dependencies;
