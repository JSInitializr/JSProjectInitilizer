import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import DependencyCard from './Card';
const axios = require('axios');
let size = 10, apiLink = `https://api.npms.io/v2/search?q=""&size=${size}`;


class SearchDependency extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: []
    }
    this.searchDependency = this.searchDependency.bind(this);
  }


  dependencyText = (event) => {
    this.setState({ searchText: event.target.value }, () => {
      apiLink = `https://api.npms.io/v2/search?q=${this.state.searchText}&size=${size}`
    });
   if(this.state.searchText.length > 2){
    apiLink = `https://api.npms.io/v2/search?q=${this.state.searchText}&size=${size}`
    this.searchDependency();
   }
    //console.log(event.target.value);
  }
  
  handleSelection = (cardId, category) => {
    const dependencyList = this.props.dependencyList;
    const updatedArr = dependencyList[category].map(item => {
      if (item.label === cardId) {
        return { ...item, value: !item.value };
      }
      return item;
    });
    const updatedList = { ...dependencyList }
    updatedList[category] = updatedArr;
    this.props.updateDependencyList(updatedList);
  }

  searchDependency = () => {
    axios.get(apiLink)
      .then((response) => {
        const filteredArr = this.filteredEarlierSelectionDependency(response.data.results);
        debugger;
        this.setState({ searchResults: filteredArr }, () => {
          console.log(this.state.dependencies);
        })
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
        console.log("end")
      })
  }

  filteredEarlierSelectionDependency = (responseDependencyList) => {
    const c = responseDependencyList.filter(dependency => {
      for (const key of Object.keys(this.props.dependencies)) {
        return !this.props.dependencies[key].find(storeDependency => {
          return (storeDependency.label.toUpperCase() === dependency.package.name.toUpperCase() && storeDependency.value);
        });
      }
    });

    return c;
  }

  render() {
    return (
      < >
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField id="input-with-icon-grid" label="Search dependencies" onChange={this.dependencyText} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={this.searchDependency}>
              <SearchIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {this.state.dependencies && this.state.dependencies.map(t => <Grid key={t.searchScore} item xs={4} sm={0}>
            <DependencyCard isSelected={t.value} handleSelection={this.handleSelection} label={t.package.name} desc={t.package.description} />
          </Grid>)}
        </Grid>
      </>
    );
  }
}
export default SearchDependency;


