import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectMetaData from "./ProjectMetaData";
import PrimarySelectionTabs from "./PrimarySelectionTabs";
import Dependencies from "./Dependencies";

class Body extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = { shouldExpanded: false };
  }

  handleTabChange = (event,newValue) => {
    this.setState({ ...this.state, shouldExpanded: (newValue === 3)});
  }

  render() {
    return (
      <>
        <Grid container spacing={8}>
          <Grid item xs={12}></Grid>
          <PrimarySelectionTabs handleTabChange={(event,newValue) => this.handleTabChange(event,newValue)} shouldExpanded={this.state.shouldExpanded}/>
          <Grid item xs={3} sm={0}> <h4 style={{ textAlign: 'right' }}>{'Project Meta Data'}</h4></Grid>
          <Grid item xs={6} sm={0}><ProjectMetaData /></Grid>
          <Grid item xs={3} sm={0}></Grid>
          <Grid item xs={3} sm={0}> <h4 style={{ textAlign: 'right' }}>{'Dependencies'}</h4></Grid>
          <Grid item xs={9} sm={0}><Dependencies/></Grid>
          <Grid item xs={3} sm={0}> <h4 style={{ textAlign: 'right' }}>{'Dependencies'}</h4></Grid>
          <Grid item xs={9} sm={0}>end</Grid>
        </Grid>
      </>
    );
  };
}

export default Body;
