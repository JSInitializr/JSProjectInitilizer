import React from 'react';
import BasicTextField from '../controls/BasicTextField';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function ProjectMetaData() {


    const inputs = {
        optionalInputs: [
            {
                label: 'Description',
                placeholder: 'Enter Text',
                value: ''
            },
            {
                label: 'Git repository link',
                placeholder: 'Enter Text',
                value: ''
            },
            {
                label: 'Keywords',
                placeholder: 'Enter Text',
                value: ''
            },
            {
                label: 'Author',
                placeholder: 'Enter Text',
                value: ''
            },
            {
                label: 'License',
                placeholder: 'Enter Text',
                value: ''
            }
        ],
        requiredInputs: [
            {
                label: 'PackageName',
                placeholder: '',
                value: ''
            },
            {
                label: 'Version',
                placeholder: '',
                value: ''
            },
        ]
    }


    const requiredInputs = inputs.requiredInputs.map((data) => {
        return (<>
            <BasicTextField label={data.label} placeholder={data.placeholder} value={data.value} />
        </>);
    });

    const optionalInputs = inputs.optionalInputs.map((data) => {
        return (<>
            <BasicTextField label={data.label} placeholder={data.placeholder} value={data.value} />
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



