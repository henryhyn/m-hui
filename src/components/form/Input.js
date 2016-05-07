import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className } = this.props;
        const cls = classNames({
            'hui-input': true
        }, className);

        return (
            <input className={cls} {...this.props}/>
        );
    }
}

Input.propTypes = {
    defaultValue: PropTypes.string
};

Input.defaultProps = {
    defaultValue: undefined
};

export default Input;
