import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Label
 *
 * 用法: <Label>文本</Label>
 */
class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-label': true
        }, className);

        return (
            <label className={cls} {...this.props}>{children}</label>
        );
    }
}

Label.propTypes = {};

Label.defaultProps = {};

export default Label;
