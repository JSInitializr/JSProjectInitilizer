import React, { Component } from 'react';
import BasicTextField from '../controls/BasicTextField';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect } from 'react-redux';

class ProjectMetaData extends Component {

    // const [values, setValues] = React.useState({});

    handleChange = name => event => {
        // setValues({ ...values, [name]: event.target.value });
    };

    inputControls = (metaData, required=true) => {
        const filteredMetaData = metaData.filter(data=>(data.required === required));
        return filteredMetaData.map((data) => {
            return (<>
                <BasicTextField key={data.label} handleChange={this.handleChange(data.id)} label={data.label} placeholder={data.placeholder} value={data.value} />
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
        return (
            <>
                {this.inputControls(this.props.metaData)}
                <BasicExpansionPanel summaryPanel={this.detailMoreOptionControl()} detailPanel={this.inputControls(this.props.metaData,false)} />
            </>);
    }

}



const mapStateToProps = (state) => ({
    metaData: state.response.metaData,
});

export default connect(mapStateToProps, null)(ProjectMetaData);

