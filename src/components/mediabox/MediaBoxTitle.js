import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Media Box Title
 *
 * 用法: <MediaBoxTitle>文本</MediaBoxTitle>
 */
class MediaBoxTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-media-title': true
        }, className);

        return (
            <h4 className={cls} {...this.props}>{children}</h4>
        );
    }
}

MediaBoxTitle.propTypes = {};

MediaBoxTitle.defaultProps = {};

export default MediaBoxTitle;
