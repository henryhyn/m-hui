import './hui_switch.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className } = this.props;
        const cls = classNames({
            'hui-switch': true
        }, className);

        return (
            <input className={cls} type="checkbox" {...this.props}/>
        );
    }
}

Switch.propTypes = {
    defaultValue: PropTypes.string
};

Switch.defaultProps = {
    defaultValue: undefined
};

export default Switch;
