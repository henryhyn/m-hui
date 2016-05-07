import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class NavBarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, active, label, children } = this.props;
        const cls = classNames({
            'hui-navbar-item': true,
            'hui-bar-item-on': active
        }, className);

        return (
            <div className={cls} {...this.props}>
                {label ? label : children}
            </div>
        );
    }
}

NavBarItem.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string
};

NavBarItem.defaultProps = {
    active: false
};

export default NavBarItem;
