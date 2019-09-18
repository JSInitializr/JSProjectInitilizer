import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        boxShadow:'none',
        background:'none'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function BasicExpansionPanel(props) {
    const classes = useStyles();
    return (
        <div >
            <ExpansionPanel className={classes.root} expanded={props.expanded}>
                <ExpansionPanelSummary
                    style={{ padding: '0px 0px 0px' }}>    
                    {props.summaryPanel}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ display: 'inline', padding: '0px 0px 0px' }}>
                    {props.detailPanel}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
