import React from 'react';
import BasicTextField from '../controls/BasicTextField';


export default function ProjectMetaData (){

    
        const inputs = {
            metaData:[
                {
                  label:'Description',
                  placeholder:'Enter Text',
                  value:''
                },
                {
                  label:'Git repository link',
                  placeholder:'Enter Text',
                  value:''
                },
                {
                  label:'Keywords',
                  placeholder:'Enter Text',
                  value:''
                },
                {
                  label:'Author',
                  placeholder:'Enter Text',
                  value:''
                },
                {
                  label:'License',
                  placeholder:'Enter Text',
                  value:''
                }
            ]
        }

    
        const options = inputs.metaData.map((data)=>{
            return (<>
              <BasicTextField label={data.label} placeholder={data.placeholder} value={data.value}/>
              </>);
        });
    
        return options;
    
}



