import React, { Component } from "react";
import TopNavigation from "./components/layouts/TopNavigation";
import BottomNavigation from "./components/layouts/BottomNavigation";
import MainContainer from "./components/layouts/MainContainer";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { connect } from "react-redux";
import { fetchUIRenderData, submitInputData } from "./redux/actions";
import * as constants from "./assets/constants";

const theme = createMuiTheme({
  palette: {
    background: "white"
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.submitActionHandler = this.submitActionHandler.bind(this);
  }

  prepareRequestJson = () => {

    const selectedTabItems = this.props.response.tabs.reduce((tabObject, tabItem)=> {
      if(tabItem.childTab && tabItem.childTab.whichTab === tabItem.selectedValue){
        tabObject[tabItem.label] = tabItem.selectedValue;
        tabObject[tabItem.childTab.label] = tabItem.childTab.selectedValue;
      }else{
        tabObject[tabItem.label] = tabItem.selectedValue;
      }
      return tabObject;
    },{});

    const metaDataObj = this.props.response.metaData
      .filter(item=>item.value !='')
      .reduce((metaDataObj,inputItem)=>{
        metaDataObj[inputItem.label] = inputItem.value;
        return metaDataObj;
      },{})
      
    let selectedDependencyObj = {}  
    for (const category in this.props.response.dependencyList) {
      selectedDependencyObj = 
        this.props.response.dependencyList[category]
          .filter(dependency => {
            return dependency.value;
          })
          .reduce((obj,dependency) => {
            obj[dependency.label] = dependency.version;
            return obj;
          },selectedDependencyObj);
          console.log(selectedDependencyObj);
    }

    

    const requestParams = {
      ...selectedTabItems,
      metaDataItems: metaDataObj,
      dependency:selectedDependencyObj
    };
    debugger;
    return requestParams;
  };

  validateInputs = inputs => {
    //validate project meta data
    const haveValidatedInputs = inputs.metaData.find(input => {
      return input.required === true && input.value === "";
    });
    return !haveValidatedInputs;
  };

  submitActionHandler = event => {
    const requestParams = this.prepareRequestJson();
    const isInputValidated = this.validateInputs(this.props.response);
    isInputValidated && this.props.submitInputs(requestParams);
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopNavigation />
        <MainContainer {...this.props} />
        <BottomNavigation submitAction={this.submitActionHandler} />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  response: state.response
});

const mapDispatchToProps = dispatch => ({
  fetchUIControls: () => dispatch(fetchUIRenderData()),
  submitInputs: formData => dispatch(submitInputData(formData)),
  updateTabs: tabItems =>
    dispatch({ type: constants.UPDATE_TABS, data: tabItems }),
  updateMetaData: inputControls =>
    dispatch({ type: constants.UPDATE_METADATA, data: inputControls }),
  updateDependencyList: dependency =>
    dispatch({ type: constants.UPDATE_DEPENDENCY_LIST, data: dependency })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
