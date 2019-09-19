import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        boxShadow: 'none',
        background: 'none'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function BasicExpansionPanel(props) {
    const classes = useStyles();
    var sliderRefObj;

    function sliderRef(node) {
        sliderRefObj = node;
    }

    const handleChange = panel => (event, expanded) => {
        setTimeout(function () {
            const nextFocusableElements = sliderRefObj && sliderRefObj.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (nextFocusableElements && nextFocusableElements.length > 0) {
                const f = nextFocusableElements[0];
                f.focus();
            }
        }, 10);
    };

    return (
        <div >
            <ExpansionPanel className={classes.root} expanded={props.expanded} onChange={handleChange('panel1').bind(this)}>
                <ExpansionPanelSummary
                    style={{ padding: '0px 0px 0px' }}>
                    {props.summaryPanel}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails ref={sliderRef} style={{ display: 'inline', padding: '0px 0px 0px' }}>
                    {props.detailPanel}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
