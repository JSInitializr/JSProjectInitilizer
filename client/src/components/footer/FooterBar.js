import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

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

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: 'right' }}>
                        <Typography variant="body2" gutterBottom>
                            © 2019 JS Project Initializer.<br />
                            Bootstrap Quick development.
                    </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Toolbar >
                            <Button variant="contained" color="default" >
                                Generate the project
                        <CloudDownloadIcon />
                            </Button>
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        </>
    );
}
