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
      searchResults: [],
      selectedDependencies:[]
    }
    this.searchDependency = this.searchDependency.bind(this);
  }


  dependencyText = (event) => {
    this.setState({ searchText: event.target.value }, () => {
      if (this.state.searchText.length > 2) {
        apiLink = `https://api.npms.io/v2/search?q=${this.state.searchText}&size=${size}`;
        this.searchDependency();
      } else {
        this.setState({ searchResults: [] });
      }
    });
  }

  handleSelection = (cardId) => {
    debugger;
    let isCardIdExistInState = false;
    const dependencyList = this.props.dependencies;
    const updatedList = { ...dependencyList }
    for (const category in dependencyList) {
      const updatedArr = dependencyList[category].map(item => {
        if (item.label.toUpperCase() === cardId.toUpperCase()) {
          isCardIdExistInState = true;
          return { ...item, value: !item.value };
        }
        return item;
      });
      updatedList[category] = updatedArr;
    }

    const searchFilteredItem = updatedList['search_selection_item'].filter(item => {
      return item.value;
    });
    updatedList['search_selection_item'] = searchFilteredItem;

    if (!isCardIdExistInState) {
      const selectedDependencyItem = this.state.searchResults.find(item => {
        return item.package.name === cardId;
      })
      const searchListArr = updatedList['search_selection_item'];
      searchListArr.push({label:cardId,tag:[],value:true,version:selectedDependencyItem.version, desc:selectedDependencyItem.package.description});
      updatedList['search_selection_item'] = searchListArr;
    }

    this.props.updateDependencyList(updatedList);
    this.setState({ ...this.state, searchText: '', searchResults: [],selectedDependencies: updatedList.search_selection_item });
  }

  searchDependency = () => {
    axios.get(apiLink)
      .then((response) => {
        const filteredArr = this.filteredEarlierSelectionDependency(response.data.results);
        this.setState({ ...this.state, searchResults: filteredArr }, () => {
          console.log(this.state.searchResults);
        });
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
        <Grid container spacing={1} alignItems="flex-end" xs={12}>
          <Grid item xs={8}>
            <TextField id="input-with-icon-grid" label="Search dependencies" onChange={this.dependencyText.bind(this)} value={this.state.searchText} />
            <Button variant="contained" color="secondary" onClick={this.searchDependency}>
              <SearchIcon />
            </Button>
          </Grid>
          <Grid xs={4}>Selected Dependencies:</Grid>
          <Grid>

          </Grid>
        </Grid>
        <Grid container xs={12} spacing={1}>
        <Grid container xs={8} >
          {this.state.searchResults && this.state.searchResults.map(t =>
            <Grid key={t.searchScore} item xs={6} >
              <DependencyCard isSelected={t.value} handleSelection={this.handleSelection} label={t.package.name} desc={t.package.description} />
            </Grid>)}
            </Grid>
          <Grid xs={4}>{this.state.selectedDependencies.map(t=>
           <DependencyCard isSelected={t.value} handleSelection={this.handleSelection} label={t.label}  />
           )}</Grid>
        </Grid>
      </>
    );
  }
}
export default SearchDependency;


