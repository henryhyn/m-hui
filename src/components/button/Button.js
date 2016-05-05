require('./button.less');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className } = this.props;
        const Tag = this.props.href ? 'a' : 'button';
        const cls = classNames({
            'hui-btn': true
        }, className);

        return (
            <Tag className={cls} {...this.props}>Button</Tag>
        );
    }
}

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
