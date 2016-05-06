import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page } from '../../index';

class NavBarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='NavBar'>开发中, 敬请期待...</Page>
        );
    }
}

NavBarDemo.propTypes = {};

NavBarDemo.defaultProps = {};

export default NavBarDemo;
