import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class FormCell extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-cell': true,
            'hui-vcode': this.props.vcode,
            'hui-cell-warn': this.props.warn,
            'hui-cell-switch': this.props.switch,
            'hui-cell-select': this.props.select,
            'hui-select-before': this.props.selectPos == 'before',
            'hui-select-after': this.props.selectPos == 'after',
            'hui-check-label': this.props.radio || this.props.checkbox
        }, className);

        if (this.props.radio || this.props.checkbox) {
            return (
                <label className={cls} {...this.props}>{children}</label>
            );
        } else {
            return (
                <div className={cls} {...this.props}>{children}</div>
            );
        }
    }
}

FormCell.propTypes = {
    vcode: PropTypes.bool,
    warn: PropTypes.bool,
    radio: PropTypes.bool,
    checkbox: PropTypes.bool,
    select: PropTypes.bool,
    selectPos: PropTypes.string
};

FormCell.defaultProps = {
    vcode: false,
    warn: false,
    radio: false,
    checkbox: false,
    select: false,
    selectPos: undefined
};

export default FormCell;
