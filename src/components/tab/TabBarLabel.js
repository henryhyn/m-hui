import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class TabBarLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-tabbar-label': true
        }, className);

        return (
            <p className={cls} {...this.props}>
                {children}
            </p>
        );
    }
}

TabBarLabel.propTypes = {};

TabBarLabel.defaultProps = {};

export default TabBarLabel;
