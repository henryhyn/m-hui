import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page } from '../../index';

class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='404'>未找到该页面, 可能正处于开发中...</Page>
        );
    }
}

PageNotFound.propTypes = {};

PageNotFound.defaultProps = {};

export default PageNotFound;
