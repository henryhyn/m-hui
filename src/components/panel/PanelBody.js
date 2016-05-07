import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Panel Body
 *
 * 用法: <PanelBody>文本</PanelBody>
 */
class PanelBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        const className = classNames({
            'hui-panel-bd': true
        });

        return (
            <div className={className} {...this.props}>{children}</div>
        );
    }
}

PanelBody.propTypes = {};

PanelBody.defaultProps = {};

export default PanelBody;
