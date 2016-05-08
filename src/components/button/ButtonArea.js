import './button_area.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 栅格系统
 * @param {array} data - 用于渲染栅格的数据, 一般包含 {icon, label, href} 三个数据, 默认 []
 */
class ButtonArea extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, direction, children } = this.props;
        const cls = classNames({
            'hui-btn-area': true,
            'hui-btn-area-inline': direction === 'horizontal'
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

ButtonArea.propTypes = {
    direction: PropTypes.string
};

ButtonArea.defaultProps = {
    direction: 'vertical'
};

export default ButtonArea;
