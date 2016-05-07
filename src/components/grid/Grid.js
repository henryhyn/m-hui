import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { GridIcon, GridLabel } from '../../index';

/**
 * 九宫格的单元格
 * @param {string} label - 单元格标签, 默认 ''
 * @param {any} icon - 单元格 Icon, 一般为 img 对象, 默认忽略
 */
class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { icon, label, children, className } = this.props;
        const cls = classNames({
            'hui-grid': true
        }, className);

        return (
            <a className={cls} {...this.props}>
                {icon ? <GridIcon>{icon}</GridIcon> : false}
                {children}
                {label ? <GridLabel>{label}</GridLabel> : false}
            </a>
        );
    }
}

Grid.propTypes = {
    icon: PropTypes.any,
    label: PropTypes.string
};

Grid.defaultProps = {
    icon: false,
    label: ''
};

export default Grid;
