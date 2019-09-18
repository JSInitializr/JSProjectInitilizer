import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles(theme => ({
    button: {
        alignItems:'center',
        justifyContent:'center'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    }
}));

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar >
                    <Button variant="contained" color="default" >
                        Generate the project
                        <CloudDownloadIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
