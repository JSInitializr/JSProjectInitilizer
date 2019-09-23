import React, { Component } from 'react';
import DependencyCard from './Card';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
import DetailMore from '../controls/DetailMore';

class Dependencies extends Component {

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

  handleSelection = (cardId,category) => {
    const dependencyList = this.props.dependencyList;
    const updatedArr = dependencyList[category].map(item=>{
      if(item.label === cardId){
        return {...item,value:true};
      }
      return item;
    });
    const updatedList = {...dependencyList}
    updatedList[category] = updatedArr;
    this.props.updateDependencyList(updatedList);
  }


  detailMoreOptionControl = (topic) => {
    return <DetailMore label={topic} />
  }

  getDetailPanel = (topic) => {
    return (<>
      <Grid container spacing={2}>
        {this.dependencyList('react')[topic].map(t => <Grid key={t.label} item xs={4} sm={0}>
          <DependencyCard handleSelection={this.handleSelection} label={t.label} desc={t.desc} category={topic}/>
        </Grid>)}
      </Grid>
    </>);
  }


  render() {

    if (!this.props.dependencyList) {
      return (<div><h1>No list here</h1></div>)
    }

    const arr = [];
    for (const topic in this.dependencyList('react')) {
      arr.push(<>
        <BasicExpansionPanel defaultExpanded={true} summaryPanel={this.detailMoreOptionControl(topic)} detailPanel={this.getDetailPanel(topic)} />
      </>)
    }
    return (<>
      {arr}
    </>);
  }
}



export default Dependencies;
