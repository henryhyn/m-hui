import './panel.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 面板
 * @param {bool} access - 是否透明, 默认 false
 */
class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, access, children } = this.props;
        const cls = classNames({
            'hui-panel': true,
            'hui-panel-access': access
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

Panel.propTypes = {
    access: PropTypes.bool
};

Panel.defaultProps = {
    access: false
};

export default Panel;
