import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Cells Title
 *
 * 用法: <CellsTitle>文本</CellsTitle>
 */
class CellsTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-cells-title': true
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

CellsTitle.propTypes = {};

CellsTitle.defaultProps = {};

export default CellsTitle;
