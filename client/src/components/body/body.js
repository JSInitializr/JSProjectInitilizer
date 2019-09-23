import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectMetaData from "./ProjectMetaData";
import PrimarySelectionTabs from "./PrimarySelectionTabs";
import Dependencies from "./Dependencies";
import { connect } from 'react-redux';
import { fetchUIRenderData } from '../../redux/actions';
import * as constants from '../../assets/constants';

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
        <Grid container spacing={8}>
          <Grid item xs={12}></Grid>
          <PrimarySelectionTabs tabs={this.props.response.tabs} updateTabs={this.props.updateTabs} />
          <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Project Meta Data'}</h4></Grid>
          <Grid item xs={12} sm={9}><Grid item xs={9} sm={6}><ProjectMetaData metaData={this.props.response.metaData} updateMetaData={this.props.updateMetaData}/></Grid></Grid>
          <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Dependencies'}</h4></Grid>
          <Grid item xs={12} sm={9}><Dependencies dependencyList={this.props.response.dependencyList} updateDependencyList={this.props.updateDependencyList}/></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </>
    );
  };
}

const mapStateToProps = (state) => ({
  response: state.response,
})

const mapDispatchToProps = dispatch => ({
  fetchUIControls: () => dispatch(fetchUIRenderData()),
  updateTabs:(tabItems)=>dispatch({type:constants.UPDATE_TABS,data:tabItems}),
  updateMetaData:(inputControls)=>dispatch({type:constants.UPDATE_METADATA,data:inputControls}),
  updateDependencyList:(dependency)=>dispatch({type:constants.UPDATE_DEPENDENCY_LIST,data:dependency}),
});

export default connect(mapStateToProps,mapDispatchToProps)(Body);
