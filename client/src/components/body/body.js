import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectMetaData from "./ProjectMetaData";
import PrimarySelectionTabs from "./PrimarySelectionTabs";
import Card from './Card';

class Body extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = { shouldExpanded: false };
  }

  handleTabChange = (event,newValue) => {
    if (newValue === 3) {
      this.setState({ ...this.state, shouldExpanded: true });
    } else {
      this.setState({ ...this.state, shouldExpanded: false });
    }
  }

  render() {
    return (
      <>
        <Grid container spacing={8}>
          <Grid item xs={12}></Grid>
          <PrimarySelectionTabs handleTabChange={(event,newValue) => this.handleTabChange(event,newValue)} shouldExpanded={this.state.shouldExpanded}/>
          <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Project Meta Data'}</h4></Grid>
          <Grid item xs={12} sm={9}><Grid item xs={9} sm={6}><ProjectMetaData /></Grid></Grid>
          <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Dependencies'}</h4></Grid>
          <Grid item xs={12} sm={9}><Card/></Grid>
          <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Dependencies'}</h4></Grid>
          <Grid item xs={12} sm={9}><Card/></Grid>
        </Grid>
      </>
    );
  };
}

export default Body;
