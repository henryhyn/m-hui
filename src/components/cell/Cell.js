require('./cell.less');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const Tag = this.props.href ? 'a' : this.props.htmlFor ? 'label' : 'div';
        const cls = classNames({
            'hui-cell': true
        }, className);

        return (
            <Tag className={cls} {...this.props}>{children}</Tag>
        );
    }
}

Cell.propTypes = {};

Cell.defaultProps = {};

export default Cell;
