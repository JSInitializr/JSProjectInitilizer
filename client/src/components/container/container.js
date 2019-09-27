import React, { Component } from 'react';
import Footer from '../footer/footer';
import Body from '../body/body';
import { connect } from 'react-redux';
import { fetchUIRenderData, submitInputData } from '../../redux/actions';
import * as constants from '../../assets/constants';

class Container extends Component {

    constructor(props){
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
        const isInputValidated = this.validateInputs(this.props.response);
        isInputValidated && this.props.submitInputs(this.props.response);
    }

    render() {
        return (<>
            <Body {...this.props}/>
            <Footer submitAction={this.submitActionHandler}/>
        </>);
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

export default connect(mapStateToProps, mapDispatchToProps)(Container);


