import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class TabBodyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, active, children } = this.props;
        const cls = classNames({
            'hui-tab-bd-item': true
        }, className);

        return (
            <div className={cls} style={{display: active ? 'block' : 'none'}} {...this.props}>
                {children}
            </div>
        );
    }
}

TabBodyItem.propTypes = {
    active: PropTypes.bool
};

TabBodyItem.defaultProps = {
    active: false
};

export default TabBodyItem;
