import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    light: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    console.log(state);
    if( state.light){
      document.getElementById('body').className ="light"
    }else{
      document.getElementById('body').className ="dark"
    }
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch checked={state.checkedA} onChange={handleChange('light')} value="light" />
        }
        label="Color"
      />
    </FormGroup>
  );
}