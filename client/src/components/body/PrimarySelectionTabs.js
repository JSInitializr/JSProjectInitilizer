import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import BasicTab from '../controls/BasicTab';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
import { connect } from 'react-redux';

class PrimarySelectionTabs extends Component {

    handleTabChange = (event, newValue) => {

        // let selectedValue = null;
        // for (const [key, value] of Object.entries(tabDataSource)) {
        //     const type = value[event.currentTarget.id];
        //     if (type) {
        //         selectedValue = type[newValue];
        //     }
        // }
        // props.handleTabEvent(event.currentTarget.id, selectedValue);
    }

    setupGridRow = (item) => {
        return <>
            <Grid item xs={12} sm={3}> <h4 style={{ textAlign: 'right' }}>{item.label}</h4></Grid>
            <Grid item xs={12} sm={9}><BasicTab tabTitle={item} handleChange={(event, newValue) => this.handleTabChange(event, newValue)} tabs={item.options} /></Grid>
        </>
    }

    getParentChildTab = (item) => {
        const t = <>
            <Grid container spacing={8}>
                {this.setupGridRow(item)}
            </Grid>
        </>;

        return (<Grid item xs={12} sm={0}>
            <BasicExpansionPanel expanded={this.props.shouldExpanded} summaryPanel={t} detailPanel={this.getTab(item.childTab)} />
        </Grid>)
    }

    getTab = (tabItem) => {
        const tab = <>
            <Grid container spacing={8}>
                {!tabItem.childTab ? this.setupGridRow(tabItem) :this.getParentChildTab(tabItem)}
            </Grid>
        </>;
        return tab;
    }

    getTabs() {
        return this.props.tabs.map(tabItem => {
            return this.getTab(tabItem);
        });
    }

    render() {
        return (<>
            {this.getTabs()}
        </>);
    }
}

const mapStateToProps = (state) => ({
    tabs: state.response.tabs,
});

export default connect(mapStateToProps, null)(PrimarySelectionTabs);
