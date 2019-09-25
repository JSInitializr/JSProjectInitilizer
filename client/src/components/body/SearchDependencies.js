import React, { Component }from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
const axios = require('axios');
let size = 10,apiLink='';

class SearchDependency extends Component{

 state={
  searchText:'',
  dependencies:''
 }

dependencyText =(event) =>{
  this.setState({searchText:event.target.value});
  apiLink =`https://api.npms.io/v2/search?q=${this.state.searchText}&size=${size}`
  //console.log(event.target.value);
}

searchDependency = () =>{
  axios.get(apiLink)
  .then(function (response) {
    this.setState({dependencies: response})
    // handle success
    //console.log(response);
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
 render(){
  return (
    <div >
         <Grid container spacing={1} alignItems="flex-end">
           <Grid item>
           <TextField id="input-with-icon-grid" label="Search dependencies" onChange={this.dependencyText}/>
           </Grid>
           <Grid item>
           <Button variant="contained" color="secondary"  onClick={this.searchDependency}>
         <SearchIcon />
       </Button>
           </Grid>
         </Grid>
       </div>
   );
 }
}
export default SearchDependency;


