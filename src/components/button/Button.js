require('./button.less');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 按钮
 * @param {bool} disabled - 是否不可用, 默认 false
 * @param {bool} plain - 是否为镂空样式, 默认 false
 * @param {string} type - 可选 primary, default, warn, 默认 primary
 * @param {string} size - 可选 normal, small, 默认 normal
 */
class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, type, plain, disabled, size, children } = this.props;
        const Tag = this.props.href ? 'a' : 'button';
        const cls = classNames({
            'hui-btn': true,

            'hui-btn-primary': type === 'primary' && !plain,
            'hui-btn-default': type === 'default' && !plain,
            'hui-btn-warn': type === 'warn',

            'hui-btn-plain-primary': type === 'primary' && plain,
            'hui-btn-plain-default': type === 'default' && plain,

            'hui-btn-small': size === 'small',

            'hui-btn-disabled': disabled
        }, className);

        return (
            <Tag className={cls} {...this.props}>{children}</Tag>
        );
    }
}

Button.propTypes = {
    type: PropTypes.string,
    plain: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string
};

Button.defaultProps = {
    type: 'primary',
    plain: false,
    disabled: false,
    size: 'normal'
};

export default Button;
