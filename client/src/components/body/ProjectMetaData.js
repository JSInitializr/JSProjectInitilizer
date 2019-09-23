import React, { Component } from 'react';
import BasicTextField from '../controls/BasicTextField';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

class ProjectMetaData extends Component {

    handleChange = (event) => {
        
        const updatedControls = this.props.metaData.map(control => {
            if(control.label === event.currentTarget.id){
                return {...control, value:event.currentTarget.value}
            }
            return control;
        })
        this.props.updateMetaData(updatedControls);
    };

    inputControls = (metaData, required = true) => {
        const filteredMetaData = metaData.filter(data => (data.required === required));
        return filteredMetaData.map((data) => {
            return (<>
                <BasicTextField id={data.label} key={data.label} handleChange={this.handleChange} label={data.label} placeholder={data.placeholder} value={data.value} />
            </>);
        });
    }

    detailMoreOptionControl = () => {
        const detailMoreOption =
            <>
                <TextField
                    tabIndex='-1'
                    id="standard-read-only-input"
                    defaultValue="Options"
                    margin="normal"
                    fullWidth={true}
                    style={{ padding: '0px 25px 0px 10px', width: '95%', background: 'none' }}
                    InputProps={{
                        readOnly: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <ExpandMoreIcon />
                            </InputAdornment>
                        )
                    }}
                />
            </>;
        return detailMoreOption;
    }

    render() {

        if (!this.props.metaData) {
            return <div><h1>No metaData</h1></div>
        }

        return (
            <>
                {this.inputControls(this.props.metaData)}
                <BasicExpansionPanel summaryPanel={this.detailMoreOptionControl()} detailPanel={this.inputControls(this.props.metaData, false)} />
            </>);
    }

}



export default ProjectMetaData;

