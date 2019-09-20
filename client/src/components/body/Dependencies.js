import React from 'react';
import Card from './Card';
import DependencyList from '../../assets/DependencyList';
import Grid from "@material-ui/core/Grid";

export default function Dependencies() {
    return (<>
    <Grid container spacing={2}>
    {DependencyList('react').map(t =>  <Grid  item xs={4} sm={0}><Card label={t.label} desc={t.desc}/></Grid>)}
    </Grid>
    
    </>);
}
