import React from 'react';
import Card from './Card';
import DependencyList from '../../assets/DependencyList';
import Grid from "@material-ui/core/Grid";

export default function Dependencies() {
    return (<>
    <Grid>
        {DependencyList('react').map(t => <Card label={t.label} desc={t.desc}/>)}
    </Grid>
    </>);
}
