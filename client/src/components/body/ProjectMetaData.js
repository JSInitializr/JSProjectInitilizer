import React from 'react';
import BasicTextField from '../controls/BasicTextField';
import BasicExpansionPanel from '../controls/BasicExpansionPanel';


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
        requiredInputs:[
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

    return (<>
        {requiredInputs}
        <BasicExpansionPanel detailPanel={optionalInputs}/>
    </>
    );

}



