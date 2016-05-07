import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Radio extends Component {
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
                <input className={cls} type="radio" {...this.props}/>
                <span className="hui-icon-checked"></span>
            </div>
        );
    }
}

Radio.propTypes = {};

Radio.defaultProps = {};

export default Radio;
