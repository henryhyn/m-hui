require('./toast.less');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Mask, Icon } from '../../index';

/**
 * Toast
 *
 * Toast 用于临时显示某些信息，并且会在数秒后自动消失。这些信息通常是轻量级操作的成功、失败或等待状态信息。
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, show, icon, iconSize, children } = this.props;
        const cls = classNames({
            'hui-loading-toast': icon === 'loading'
        }, className);

        return (
            <div className={cls} style={{display: show ? 'block' : 'none'}}>
                <Mask transparent/>

                <div className="hui-toast">
                    <Icon value={icon} size={iconSize}/>

                    <p className="hui-toast-content">{children}</p>
                </div>
            </div>
        );
    }
}

Toast.propTypes = {
    show: PropTypes.bool,
    icon: PropTypes.string,
    iconSize: PropTypes.string
};

Toast.defaultProps = {
    show: false,
    icon: 'toast',
    iconSize: 'large'
};

export default Toast;
