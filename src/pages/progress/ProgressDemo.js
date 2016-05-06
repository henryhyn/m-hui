import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page } from '../../index';

class ProgressDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='Progress'>开发中, 敬请期待...</Page>
        );
    }
}

ProgressDemo.propTypes = {};

ProgressDemo.defaultProps = {};

export default ProgressDemo;
