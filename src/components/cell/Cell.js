import './cell.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, access, children } = this.props;
        const Tag = this.props.href ? 'a' : this.props.htmlFor ? 'label' : 'div';
        const cls = classNames({
            'hui-cell': true,
            'no-access': !access,
            'hui-check-label': this.props.htmlFor,
            'hui-cell-switch': this.props.switch,
            'hui-cells-radio': this.props.radio,
            'hui-cells-checkbox': this.props.checkbox
        }, className);

        return (
            <Tag className={cls} {...this.props}>{children}</Tag>
        );
    }
}

Cell.propTypes = {
    access: PropTypes.bool
};

Cell.defaultProps = {
    access: true
};

export default Cell;
