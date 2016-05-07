import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Media Box Description
 *
 * 用法: <MediaBoxDescription>文本</MediaBoxDescription>
 */
class MediaBoxDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-media-desc': true
        }, className);

        return (
            <p className={cls} {...this.props}>{children}</p>
        );
    }
}

MediaBoxDescription.propTypes = {};

MediaBoxDescription.defaultProps = {};

export default MediaBoxDescription;
