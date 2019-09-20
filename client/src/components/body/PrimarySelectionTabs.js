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
        hTabs: {
            Database: ["MongoDB", "MySql", "PostgreSQL", "None"],
        }

    };

    const handleTabChange = (event, newValue) => {
        if (event.currentTarget.id !== 'Database') {
          debugger;
          // this.setState({ ...this.state, shouldExpanded: (newValue === 3) });
        }
      }

    const setupGridRow = (item, tabs) => {
        return <>
            <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{item}</h4></Grid>
            <Grid item xs={12} sm={9}><BasicTab tabTitle={item} handleChange={(event, newValue) => handleTabChange(event, newValue)} tabs={tabs[item]} /></Grid>
        </>
    }


    const dataBaseTabs = () => {

        const arr = [];

        for(const item in tabDataSource.hTabs){
            arr.push(
                <>
                    {setupGridRow(item,tabDataSource.hTabs)}
                </>
            )
        }

        const tabs = <>
            <Grid container spacing={8}>
                <Grid item xs={12}></Grid>
                {arr}
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
                        {setupGridRow(item,tabDataSource.tabs)}
                    </Grid>
                </>;
                arr.push(<Grid item xs={12} sm={12}>
                    <BasicExpansionPanel expanded={props.shouldExpanded} summaryPanel={t} detailPanel={dataBaseTabs()} />
                </Grid>)
            } else {
                arr.push(
                    <>
                        {setupGridRow(item,tabDataSource.tabs)}
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
