import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Panel Header
 *
 * 用法: <PanelHeader>文本</PanelHeader>
 */
class PanelHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        const className = classNames({
            'hui-panel-hd': true
        });

        return (
            <div className={className} {...this.props}>{children}</div>
        );
    }
}

PanelHeader.propTypes = {};

PanelHeader.defaultProps = {};

export default PanelHeader;
