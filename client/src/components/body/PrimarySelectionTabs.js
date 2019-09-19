import React from 'react';
import Grid from "@material-ui/core/Grid";
import BasicTab from '../controls/BasicTab';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';

export default function PrimarySelectionTabs(props) {

    const tabDataSource = {
        tabs: {
          Language: ["Javascript", "Typescript"],
          Technology: ["Angular", "React", "React Native", "Node js server"],
        },
        databaseTabs:["MongoDB", "MySql", "PostgreSQL"],
      };


    const dataBaseTabs = () => {
        const tabs = <>
            <Grid container spacing={8}>
                <Grid item xs={12}></Grid>
                <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{'Database'}</h4></Grid>
                <Grid item xs={12} sm={9}><BasicTab tabs={tabDataSource.databaseTabs} /></Grid>
            </Grid>
        </>;
        return tabs;
    }

    const getTabsDetails = () => {
        const arr = [];
        for (const item in tabDataSource.tabs) {
            if (item === 'Technology') {
                const t = <>
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{item}</h4></Grid>
                        <Grid item xs={12} sm={9}><BasicTab handleChange={props.handleTabChange} tabs={tabDataSource.tabs[item]} /></Grid>
                    </Grid>
                </>;
                arr.push(<Grid item xs={12} sm={12}>
                    <BasicExpansionPanel expanded={props.shouldExpanded} summaryPanel={t} detailPanel={dataBaseTabs()} />
                </Grid>)
            } else {
                arr.push(
                    <>
                        <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{item}</h4></Grid>
                        <Grid item xs={12} sm={9}><BasicTab tabs={tabDataSource.tabs[item]} /></Grid>
                    </>
                )
            }

        }
        return arr;
    }


    return (
        <>
            {getTabsDetails()}
        </>
    );
}
