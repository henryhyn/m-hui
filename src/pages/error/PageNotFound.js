import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>未找到该页面, 可能正处于开发中...</div>
        );
    }
}

PageNotFound.propTypes = {};

PageNotFound.defaultProps = {};

export default PageNotFound;
