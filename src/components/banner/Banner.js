import './banner.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        const cls = classNames({
            'hui-banner': true
        });

        return (
            <div className={cls}>{children}</div>
        );
    }
}

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
