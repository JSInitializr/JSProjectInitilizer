import React from 'react';
import Card from './Card';
import DependencyList from '../../assets/DependencyList';
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));


export default function Dependencies() {
const classes = useStyles();
const dependenciesList = DependencyList('react');
console.log(dependenciesList);
    for ( const topic in dependenciesList){
        debugger;
        return(
            <>
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
          { DependencyList('react')[topic].map(t =>  <Grid  item xs={4} sm={0}><Card label={t.label} desc={t.desc}/></Grid>)} 
          </Grid>   
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </>
        )
    }
}
