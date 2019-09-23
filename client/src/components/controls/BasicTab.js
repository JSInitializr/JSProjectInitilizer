import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class BasicTab extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  a11yProps = (id,index) => {
    return {
      id: `${id}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
  }
  setValue = (tab) =>{
    console.log(tab);
  }
  tabs = () => {
    const t = this.props.tabs.map((tab) => {
      return <Tab label={tab} {...this.a11yProps(this.props.tabTitle,0)} />
    })
    return t;
  }

  handleChange = (event, newValue) => {
    this.setState({value:newValue});
    if(this.props.handleChange){
      this.props.handleChange(event,newValue);
    }
  }

  render(){
    return (
      <div >
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="action tabs example"
        >
          {this.tabs()}
        </Tabs>
  
      </div>
    );
  }
}

export default BasicTab;