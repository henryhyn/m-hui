import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { TabBarIcon, TabBarLabel } from '../../index';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class TabBarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, active, icon, label, children } = this.props;
        const cls = classNames({
            'hui-tabbar-item': true,
            'hui-bar-item-on': active
        }, className);

        if (icon || label) {
            return (
                <div className={cls} {...this.props}>
                    {icon ? <TabBarIcon>{icon}</TabBarIcon> : false}
                    {label ? <TabBarLabel>{label}</TabBarLabel> : false}
                </div>
            );
        } else {
            return (
                <div className={cls} {...this.props}>
                    {children}
                </div>
            );
        }
    }
}

TabBarItem.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.any,
    label: PropTypes.string
};

TabBarItem.defaultProps = {
    active: false,
    icon: false,
    label: ''
};

export default TabBarItem;
