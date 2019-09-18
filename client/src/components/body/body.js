import React, { Component } from "react";
import CenteredTabs from "./LanguageSelection";
import ProjectMetaData from "./ProjectMetaData";
import Grid from "@material-ui/core/Grid";
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
        // 
    }
    render() {
        return (
            <>
                <Grid container spacing={8}>
                    <Grid item xs={12}></Grid>
                    {this.getTabsDetails()}
                </Grid>
            </>
        );
    };
}

export default Body;
