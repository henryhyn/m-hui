import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 导航栏
 *
 * 因为微信本身就有一个顶部的标题栏，所以这个导航栏其实是在标题栏之下的二级导航栏，因此它实际上就是一个放在页面顶部的 tabbar 而已。
 */
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-navbar': true
        }, className);

        return (
            <div className={cls} {...this.props}>
                {children}
            </div>
        );
    }
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
