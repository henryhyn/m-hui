import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page } from '../../index';

class TabBarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='TabBar'>开发中, 敬请期待...</Page>
        );
    }
}

TabBarDemo.propTypes = {};

TabBarDemo.defaultProps = {};

export default TabBarDemo;
