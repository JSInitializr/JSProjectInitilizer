import React, { Component } from 'react';
import BottomAppBar from './FooterBar';


class Footer extends Component {

    render(){
        return(<BottomAppBar {...this.props}/>);
    }
}

export default Footer;

