require('./button.less');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

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
            'hui-btn-warn': type === 'warn' && !plain,

            'hui-btn-plain-primary': type === 'primary' && plain,
            'hui-btn-plain-default': type === 'default' && plain,

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
