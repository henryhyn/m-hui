import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className } = this.props;
        const cls = classNames({
            'hui-check': true
        }, className);

        return (
            <div>
                <input className={cls} type="checkbox" {...this.props}/>
                <i className="hui-icon-checked"></i>
            </div>
        );
    }
}

Checkbox.propTypes = {};

Checkbox.defaultProps = {};

export default Checkbox;
