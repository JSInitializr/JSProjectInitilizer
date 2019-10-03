import React,{Component} from 'react';
import Body from '../maincontainer/body';

class MainContainer extends Component {
    render(){
        return (
           <Body {...this.props}/>
        );
    }
}

export default MainContainer;
