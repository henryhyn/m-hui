require('./page.less');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-page': true
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

Page.propTypes = {};

Page.defaultProps = {};

export default Page;
