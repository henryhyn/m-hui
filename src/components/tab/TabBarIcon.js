import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class TabBarIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-tabbar-icon': true
        }, className);

        return (
            <div className={cls} {...this.props}>
                {children}
            </div>
        );
    }
}

TabBarIcon.propTypes = {};

TabBarIcon.defaultProps = {};

export default TabBarIcon;
