import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectMetaData from "./ProjectMetaData";
import PrimarySelectionTabs from "./PrimarySelectionTabs";
import Dependencies from "./Dependencies";
import { connect } from 'react-redux';



class Body extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldExpanded: false };
  }

  handleTabEvent = (key,value) => {
    if(key === 'Technology'){
      this.setState({...this.state,shouldExpanded:(value==='Node js server')});
    }
  }

  render() {
    return (
      <>
        <Grid container spacing={8}>
          <Grid item xs={12}></Grid>
          <PrimarySelectionTabs handleTabEvent={(key, value) => this.handleTabEvent(key, value)} shouldExpanded={this.state.shouldExpanded} />
          <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Project Meta Data'}</h4></Grid>
          <Grid item xs={12} sm={9}><Grid item xs={9} sm={6}><ProjectMetaData /></Grid></Grid>
          <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Dependencies'}</h4></Grid>
          <Grid item xs={12} sm={9}><Dependencies/></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </>
    );
  };
}

// const mapStateToProps = (state) => ({
//   reponse:state.response,
//   })

// export default connect(mapStateToProps,null)(Body);

export default Body;
