import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Media Box Body
 *
 * 用法: <MediaBoxBody></MediaBoxBody>
 */
class MediaBoxBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-media-bd': true
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

MediaBoxBody.propTypes = {};

MediaBoxBody.defaultProps = {};

export default MediaBoxBody;
