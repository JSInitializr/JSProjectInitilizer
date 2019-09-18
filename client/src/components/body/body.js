import React, { Component } from 'react';
import CenteredTabs from './LanguageSelection';
import ProjectMetaData from './ProjectMetaData';

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            language: {
                tabs: [{
                    label: 'javascript',
                    id: 'js',
                },
                {
                    label: 'typescript',
                    id: 'ts',
                }],
                tabHeader: 'Script Language'
            },
            framework: {
                tabs: [{
                    label: 'Angular',
                    id: 'ajs',
                },
                {
                    label: 'React',
                    id: 'rt',
                },
                {
                    label: 'Node js server',
                    id: 'njs',
                }
            ],
                tabHeader: 'Framework'
            },

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <CenteredTabs tabs={this.state.language.tabs} tabHeader={this.state.language.tabHeader} />
                <CenteredTabs tabs={this.state.framework.tabs} tabHeader={this.state.framework.tabHeader} />
                <ProjectMetaData />
            </>);
    }
}

export default Body;

