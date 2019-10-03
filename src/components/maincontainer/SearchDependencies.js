import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import DependencyCard from './Card';
import Typography from '@material-ui/core/Typography';

const axios = require('axios');
let size = 10, apiLink = `https://api.npms.io/v2/search?q=""&size=${size}`;


class SearchDependency extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: [],
      selectedDependencies: []
    }
    this.searchDependency = this.searchDependency.bind(this);
  }


  selectedDepdendency = () => {

    const filteredDependencyList = []

    for (const category in this.props.dependencies) {
      filteredDependencyList.push(this.props.dependencies[category].filter(dependency => {
        return dependency.value;
      }).map(dependency => {
        return {
          label: dependency.label,
          value: true,
          desc: dependency.desc,
          version: dependency.version,
        }
      }));
    }
    return [].concat.apply([], filteredDependencyList).reverse();
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
      searchListArr.push({ label: cardId, tag: [], value: true, version: selectedDependencyItem.version, desc: selectedDependencyItem.package.description });
      updatedList['search_selection_item'] = searchListArr;
    }

    this.props.updateDependencyList(updatedList);
    this.setState({ ...this.state, searchText: '', searchResults: [], selectedDependencies: updatedList.search_selection_item });
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
      <>
        <Grid container spacing={8} xs={12}>
          <Grid item xs={8}>
            <TextField style={{ width: '100%' }} id="input-with-icon-grid" label="Search dependencies" onChange={this.dependencyText.bind(this)} value={this.state.searchText} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle2" >
              Selected Dependency
            </Typography>
          </Grid>
          <Grid item xs={8} direction={'column'}>
            {this.state.searchResults && this.state.searchResults.map(t => {
              return <>
                <DependencyCard isSelected={t.value} handleSelection={this.handleSelection} label={t.package.name} desc={t.package.description} />
                <div style={{ height: '10px' }}></div>
              </>
            })
            }
          </Grid>

          <Grid xs={4} direction={'column'} >{this.selectedDepdendency().map(t => {
            return <>
              <DependencyCard isSelected={t.value} handleSelection={this.handleSelection} label={t.label} desc={t.desc} />
              <div style={{ height: '10px' }}></div>
            </>
          }
          )}</Grid>

        </Grid>

      </>
    );
  }

}
export default SearchDependency;


