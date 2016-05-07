import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class PanelFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        const Tag = this.props.href ? 'a' : 'div';
        const className = classNames({
            'hui-panel-ft': true
        });

        return (
            <Tag className={className} {...this.props}>{children}</Tag>
        );
    }
}

PanelFooter.propTypes = {};

PanelFooter.defaultProps = {};

export default PanelFooter;
