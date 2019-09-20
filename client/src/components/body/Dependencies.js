import React from 'react';
import Card from './Card';
import DependencyList from '../../assets/DependencyList';
import Grid from "@material-ui/core/Grid";

export default function Dependencies() {
    return (<><Grid container spacing={8}>
        <Grid item xs={12}></Grid>
        {DependencyList.developerTools.map(t=><Grid item xs={4} sm={0}><Card /></Grid>)}
    </Grid>
    </>);
}
