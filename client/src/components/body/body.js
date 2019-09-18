import React, { Component } from "react";
import CenteredTabs from "./LanguageSelection";
import BasicTextField from "../controls/BasicTextField"
import Grid from "@material-ui/core/Grid";
import ProjectMetaData from "./ProjectMetaData";
import Dependencies from './Dependencies';
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: {
                Language: ["Javascript", "Typescript"],
                Framework: ["Angular", "React", "React Native", "Node js server"],
                DataBase: ["MongoDB", "MySql", "PostgreSQL"]
            }

        };
    }
    getTabsDetails = () => {
        const arr = [];
        for (const item in this.state.tabs) {
            arr.push(
                <>
                    <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{item}</h4></Grid>
                    <Grid item xs={12} sm={9}><CenteredTabs tabs={this.state.tabs[item]} /></Grid>
                </>
            )
        }
        return arr;
    }

  render() {
    return (
      <>
        <Grid container spacing={8}>
          <Grid item xs={12}></Grid>
          {this.getTabsDetails()} 
          <Grid item xs={12} sm={3}> <h4 style={{textAlign: 'right'}}>{'Project Meta Data'}</h4></Grid>
          <Grid item xs={12} sm={9}><Grid item xs={9} sm={6}><ProjectMetaData/></Grid></Grid>  
          <Grid item xs={12} sm={3}> <h4 style={{textAlign: 'right'}}>{'Dependencies'}</h4></Grid>
          <Grid item xs={12} sm={9}><ProjectMetaData/></Grid>         
        </Grid>
      </>
    );
  };
}

export default Body;
