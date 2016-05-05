import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class CellsTips extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-cells-tips': true
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

CellsTips.propTypes = {};

CellsTips.defaultProps = {};

export default CellsTips;
