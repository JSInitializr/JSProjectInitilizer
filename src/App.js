import React, { Component } from 'react';
// import Container from './components/container/container';
import TopNavigation from './components/layouts/TopNavigation';
import BottomNavigation from './components/layouts/BottomNavigation';
import MainContainer from './components/layouts/MainContainer';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { isUserWhitespacable } from '@babel/types';
import { connect } from 'react-redux';
import { fetchUIRenderData, submitInputData } from './redux/actions';
import * as constants from './assets/constants';


const theme = createMuiTheme({
  palette: {
    background: 'white',
  },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.submitActionHandler = this.submitActionHandler.bind(this);
  }

  validateInputs = (inputs) => {
    //validate project meta data
    const haveValidatedInputs = inputs.metaData.find(input => {
      return input.required == true && input.value === "";
    });
    return !haveValidatedInputs;
  }

  submitActionHandler = (event) => {
    debugger;
    const isInputValidated = this.validateInputs(this.props.response);
    isInputValidated && this.props.submitInputs(this.props.response);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopNavigation/>
        <MainContainer {...this.props}/>
        <BottomNavigation submitAction={this.submitActionHandler} />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  response: state.response,
})

const mapDispatchToProps = dispatch => ({
  fetchUIControls: () => dispatch(fetchUIRenderData()),
  submitInputs: (formData) => dispatch(submitInputData(formData)),
  updateTabs: (tabItems) => dispatch({ type: constants.UPDATE_TABS, data: tabItems }),
  updateMetaData: (inputControls) => dispatch({ type: constants.UPDATE_METADATA, data: inputControls }),
  updateDependencyList: (dependency) => dispatch({ type: constants.UPDATE_DEPENDENCY_LIST, data: dependency }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
