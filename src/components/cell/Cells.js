import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Cells extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, access, radio, checkbox, children } = this.props;
        const cls = classNames({
            'hui-cells': true,
            'hui-cells-access': access
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

Cells.propTypes = {
    access: PropTypes.bool,
    radio: PropTypes.bool,
    checkbox: PropTypes.bool
};

Cells.defaultProps = {
    access: false,
    radio: false,
    checkbox: false
};

export default Cells;
