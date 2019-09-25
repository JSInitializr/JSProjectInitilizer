import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const axios = require('axios');

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

let size = 10,apiLink='';

const searchDependency = () =>{
  axios.get(apiLink)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("end")
  });
}



export default function InputWithIcon(props) {
  const [searchText, setText] = useState('');
  const classes = useStyles();


  const dependencyText =(event) =>{
    setText(event.target.value);
    apiLink =`https://api.npms.io/v2/search?q=${searchText}&size=${size}`
    //console.log(event.target.value);
  }

  return (
   <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <TextField id="input-with-icon-grid" label="Search dependencies" onChange={dependencyText}/>
          </Grid>
          <Grid item>
          <Button variant="contained" color="secondary" className={classes.button} onClick={searchDependency}>
        <SearchIcon className={classes.rightIcon} />
      </Button>
          </Grid>
        </Grid>
      </div>
  );
}