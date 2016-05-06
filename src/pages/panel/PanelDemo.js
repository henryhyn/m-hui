import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page } from '../../index';

class PanelDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='Panel'>开发中, 敬请期待...</Page>
        );
    }
}

PanelDemo.propTypes = {};

PanelDemo.defaultProps = {};

export default PanelDemo;
