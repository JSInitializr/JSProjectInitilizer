import React, { Component } from 'react';
import CenteredTabs from './LanguageSelection';

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: [{
                label: 'javascript',
                id: 'js',
            },
            {
                label:'typescript',
                id: 'ts',
            }],
            tabHeader: 'Script Language'
        }
    }

    componentDidMount() {

    }

    render() {
        return (<CenteredTabs tabs={this.state.tabs} tabHeader={this.state.tabHeader} />);
    }
}

export default Body;

