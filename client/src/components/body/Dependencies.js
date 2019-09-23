import React, { Component } from 'react';
import Card from './Card';
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Dependencies extends Component {

  useStyles = () => {
    return makeStyles(theme => ({
      root: {
        width: '100%',
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    }))
  };

  dependencyList = (tag) => {
    let newPackages = {};
    for (const category in this.props.dependencyList) {
      const pkgs = this.props.dependencyList[category];
      const filteredPkgs = pkgs.filter((pkg) => {
        return pkg.tag && pkg.tag.indexOf(tag) > -1;
      });
      newPackages[category] = filteredPkgs;
    }
    return newPackages;
  }


  render() {
     if(!this.props.dependencyList){
       return(<div><h1>No list here</h1></div>)
     }

    const classes = this.useStyles();
    const arr = [];
    for (const topic in this.dependencyList('react')) {
      arr.push(<>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{topic}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={2}>
              {this.dependencyList('react')[topic].map(t => <Grid key= {t.label} item xs={4} sm={0}><Card label={t.label} desc={t.desc} /></Grid>)}
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </>)
    }
    return (<>
      {arr}
    </>)
  }
}



export default Dependencies;
