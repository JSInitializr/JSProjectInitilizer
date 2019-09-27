import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectMetaData from "./ProjectMetaData";
import PrimarySelectionTabs from "./PrimarySelectionTabs";
import Dependencies from "./Dependencies";
import Header from '../header/header';
import Logo from '../header/Logo'

class Body extends Component {

  componentDidMount() {
     this.props.fetchUIControls();
     this.props.updateTabs();
  }


  render() {

    if (!this.props.response) {
      return (<div><h1>Loading...</h1></div>);
    }

    return (
      <>
        <div style={{marginTop:'0px'}}>
        <Grid container spacing={8}>
          <Grid className='leftColumn'  item xs={3}><Logo/></Grid>
          <Grid className='rightColumn' item xs={9}><Header/></Grid>
          <PrimarySelectionTabs tabs={this.props.response.tabs} updateTabs={this.props.updateTabs} />
          <Grid className='leftColumn' item xs={3} > <h4 className='gridTitle'>{'Project Meta Data'}</h4></Grid>
          <Grid className='rightColumn' item xs={9} ><Grid item xs={9}><ProjectMetaData metaData={this.props.response.metaData} updateMetaData={this.props.updateMetaData}/></Grid></Grid>
          <Grid className='leftColumn' item xs={3} > <h4 className='gridTitle'>{'Dependencies'}</h4></Grid>
          <Grid className='rightColumn' item xs={9} ><Dependencies dependencyList={this.props.response.dependencyList} updateDependencyList={this.props.updateDependencyList}/></Grid>
          <Grid item xs={12} ></Grid>

        </Grid>
        </div>
      </>
    );
  };
}


export default Body;
