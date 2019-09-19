import React from 'react';
import BasicTextField from '../controls/BasicTextField';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function ProjectMetaData() {

    const [values, setValues] = React.useState({});


    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };


    const inputs = {
        optionalInputs: [
            {
                label: 'Description',
                placeholder: 'About project',
                value: '',
                id:'desc'
            },
            {
                label: 'Git repository link',
                placeholder: 'repo link',
                value: '',
                id:'gitRepo'
            },
            {
                label: 'Keywords',
                placeholder: 'eg. js, node',
                value: '',
                id:'keywords'
            },
            {
                label: 'Author',
                placeholder: 'developer name',
                value: '',
                id:'author'
            },
            {
                label: 'License',
                placeholder: 'eg. MIT, Apache',
                value: '',
                id:'license'
            }
        ],
        requiredInputs: [
            {
                label: 'PackageName',
                placeholder: 'project identifier',
                value: '',
                id:'pkg'
            },
            {
                label: 'Version',
                placeholder: '1.0.0',
                value: '',
                id:'version'
            },
        ]
    }


    const requiredInputs = inputs.requiredInputs.map((data) => {
        return (<>
            <BasicTextField key={data.id} handleChange={handleChange(data.id)} label={data.label} placeholder={data.placeholder} value={values[data.id]} />
        </>);
    });

    const optionalInputs = inputs.optionalInputs.map((data) => {
        return (<>
            <BasicTextField key={data.id} handleChange={handleChange(data.id)} label={data.label} placeholder={data.placeholder} value={values[data.id]} />
        </>);
    });

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

    return (<>
        {requiredInputs}
        <BasicExpansionPanel summaryPanel={detailMoreOption} detailPanel={optionalInputs} />
    </>
    );

}



