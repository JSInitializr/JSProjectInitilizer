import React, { Component } from "react";
import BasicTab from "../controls/BasicTab";
import Grid from "@material-ui/core/Grid";
import ProjectMetaData from "./ProjectMetaData";
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
class Body extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      tabs: {
        Language: ["Javascript", "Typescript"],
        Technology: ["Angular", "React", "React Native", "Node js server"],
      },
      databaseTabs:["MongoDB", "MySql", "PostgreSQL"],
      shouldExpanded:false
    };
  }

  dataBaseTabs = () =>{
    
      const tabs = <>
          <Grid container spacing={8}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Database'}</h4></Grid>
            <Grid item xs={12} sm={9}><BasicTab tabs={this.state.databaseTabs} /></Grid>
          </Grid>
        </>;
    return tabs;
  }

  handleTabChange = (newValue) => {
    debugger;
    if(newValue === 3){
      this.setState({...this.state, shouldExpanded:true});
    }else{
      this.setState({...this.state, shouldExpanded:false});
    }
  }


  getTabsDetails = () => {
    const arr = [];
    for (const item in this.state.tabs) {
      if (item === 'Technology') {
        const t = <>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{item}</h4></Grid>
            <Grid item xs={12} sm={9}><BasicTab handleChange={(newValue)=>this.handleTabChange(newValue)} tabs={this.state.tabs[item]} /></Grid>
          </Grid>
        </>;
        arr.push(<Grid item xs={12} sm={12}>
          <BasicExpansionPanel expanded={this.state.shouldExpanded}summaryPanel={t} detailPanel={this.dataBaseTabs()} />
        </Grid>)
      } else {
        arr.push(
          <>
            <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{item}</h4></Grid>
            <Grid item xs={12} sm={9}><BasicTab tabs={this.state.tabs[item]} /></Grid>
          </>
        )
      }

    }
    return arr;
  }

  render() {
    return (
      <>
        <Grid container spacing={8}>
          <Grid item xs={12}></Grid>
          {this.getTabsDetails()}
          <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Project Meta Data'}</h4></Grid>
          <Grid item xs={12} sm={9}><Grid item xs={9} sm={6}><ProjectMetaData /></Grid></Grid>
          <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Dependencies'}</h4></Grid>
          <Grid item xs={12} sm={9}><ProjectMetaData /></Grid>
        </Grid>
      </>
    );
  };
}

export default Body;
