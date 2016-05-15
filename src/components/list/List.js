import './list.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        const cls = classNames({
            'hui-list': true
        });

        return (
            <div className={cls}>{children}</div>
        );
    }
}

List.propTypes = {};

List.defaultProps = {};

export default List;
