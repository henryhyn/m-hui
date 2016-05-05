import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class CellHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-cell-hd': true
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

CellHeader.propTypes = {};

CellHeader.defaultProps = {};

export default CellHeader;
