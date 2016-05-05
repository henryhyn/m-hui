import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        return (
            <div>{children}</div>
        );
    }
}

Page.propTypes = {};

Page.defaultProps = {};

export default Page;
