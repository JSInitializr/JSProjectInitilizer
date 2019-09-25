import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Body from '../body/body';


class Container extends Component {
    render() {
        return (<>
            <Body></Body>
            <Footer></Footer>
        </>);
    }
}

export default Container;

