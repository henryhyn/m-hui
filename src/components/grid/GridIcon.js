import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 单元格 Icon
 *
 * 用法: <GridIcon><img/></GridIcon>
 */
class GridIcon extends Component {
    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-grid-icon': true
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

export default GridIcon;
