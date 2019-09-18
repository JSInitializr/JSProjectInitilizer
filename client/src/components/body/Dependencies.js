import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CenteredTabs from "./LanguageSelection";

const useStyles = makeStyles(theme => ({
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    }
}));

const tabs =[

]
export default function Dependencies() {
    const classes = useStyles();

    return (
        <>
           <CenteredTabs tabs={tabs} />
        </>
    );
}
