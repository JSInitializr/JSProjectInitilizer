import React, { Component } from 'react';
import CTextField from '../controls/TextField';


class ProjectMetaData extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <CTextField label={'Package name'} />
            </>);
    }
}

export default ProjectMetaData;

