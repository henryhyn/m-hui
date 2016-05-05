import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 单元格标签
 *
 * 用法: <GridLabel>文本</GridLabel>
 */
class GridLabel extends Component {
    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-grid-label': true
        }, className);

        return (
            <p className={cls} {...this.props}>{children}</p>
        );
    }
}

export default GridLabel;
