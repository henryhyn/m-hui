import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * TabBar
 *
 * tabbar，底部导航，通常用作 Web 应用的主界面底部导航，类似于微信主界面的底部“微信”、“通讯录”、“发现”和“我”的导航区。每个功能包含一个图标和该功能简洁的文字描述。
 */
class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-tabbar': true
        }, className);

        return (
            <div className={cls} {...this.props}>
                {children}
            </div>
        );
    }
}

TabBar.propTypes = {};

TabBar.defaultProps = {};

export default TabBar;
