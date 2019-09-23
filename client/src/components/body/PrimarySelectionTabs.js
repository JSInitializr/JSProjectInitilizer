import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import BasicTab from '../controls/BasicTab';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
import * as constants from '../../assets/constants';

class PrimarySelectionTabs extends Component {

    constructor(props) {
        super(props)
        this.state = { shouldExpanded: false }
    }

    handleTabChange = (event, newValue) => {

        const expandableTab = this.props.tabs.find((tabItem) => {
            return tabItem.childTab && tabItem.childTab.whichTab === event.currentTarget.id
        });

        const childTab = !expandableTab && this.props.tabs.find((tabItem) => {
            return tabItem.childTab && tabItem.childTab.options.find((childTabItem)=>{
                return (childTabItem === event.currentTarget.id);
            })
        });

        const tabs = this.props.tabs;
        const updatedTabs = tabs.map(tabItem=>{
            if(tabItem == expandableTab){
                return {...tabItem, childTab:{...tabItem.childTab, expanded:true}, selectedValue:event.currentTarget.id}
            }else if(tabItem === childTab){
                return {...tabItem,childTab:{...tabItem.childTab,selectedValue:event.currentTarget.id}}
            }else{
                return tabItem.childTab?{...tabItem, childTab:{...tabItem.childTab, expanded:false}, selectedValue:event.currentTarget.id}:{...tabItem, selectedValue:event.currentTarget.id};                
            }
        });
        this.props.updateTabs(updatedTabs);
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
            <BasicExpansionPanel expanded={item.childTab.expanded} summaryPanel={t} detailPanel={this.getTab(item.childTab)} />
        </Grid>)
    }

    getTab = (tabItem) => {
        const tab = <>
            <Grid container spacing={8}>
                {!tabItem.childTab ? this.setupGridRow(tabItem) : this.getParentChildTab(tabItem)}
            </Grid>
        </>;
        return tab;
    }

    getTabs() {
        if (!this.props.tabs) {
            return <div><h1>No tabs</h1></div>
        }
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



export default PrimarySelectionTabs;
