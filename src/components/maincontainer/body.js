import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectMetaData from "./ProjectMetaData";
import PrimarySelectionTabs from "./PrimarySelectionTabs";
import Dependencies from "./Dependencies";
import { connect } from 'react-redux';
import { fetchUIRenderData } from '../../redux/actions';
import * as constants from '../../assets/constants';
// import Header from '../header/header';
import Logo from '../layouts/Logo';

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
        <Grid container  md={12} lg={12} style={{'overflow-x':'hidden',
    'padding-bottom': '8%'}}>
        <PrimarySelectionTabs tabs={this.props.response.tabs} updateTabs={this.props.updateTabs} />
        <Grid container spacing={0}>
        <Grid item xs={3} style={{marginTop:'2%'}}> 
          <div>
            <h4 className='gridLable'>{'Project Meta Data'}</h4>
          </div>
        </Grid>
        <Grid item  xs={9} md={9} style={{textAlignLast: 'start',paddingLeft:'8px'}}>
            <ProjectMetaData metaData={this.props.response.metaData} updateMetaData={this.props.updateMetaData}/>
        </Grid>
        </Grid>
        <Grid item xs={3} > 
          <div>
            <h4 className='gridLable'>{'Dependencies'}</h4>
          </div>
        </Grid>
        <Grid item  xs={9} md={9} style={{textAlignLast: 'start',paddingLeft:'8px'}}>
          <Dependencies tabs={this.props.response.tabs} dependencyList={this.props.response.dependencyList} updateDependencyList={this.props.updateDependencyList}/>
        </Grid>
        </Grid>
      </>
    );
  };
}


export default Body;
