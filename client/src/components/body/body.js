import React, { Component } from "react";
import CenteredTabs from "./LanguageSelection";
import ProjectMetaData from "./ProjectMetaData";
import Grid from "@material-ui/core/Grid";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Language: ["Javascript", "Typescript"],
      Framework: ["Angular","React","React Native","Node js server"]
      };
  }
  getMenuDetails = () => {
      const arr= [];
    for(const item in this.state){
         arr.push(
            <>
            <Grid item xs={12} sm={3} style={{paddingRight: '45px'}} > <h4 style={{textAlign: 'right'}}>{item}</h4></Grid>
            <Grid item xs={12} sm={9}><CenteredTabs  tabs={this.state[item]}/></Grid>
            </>
        )
    }
    return arr;
    // 
  }
  render() {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          {this.getMenuDetails()}       
        </Grid>
      </>
    );
  };
}

export default Body;
