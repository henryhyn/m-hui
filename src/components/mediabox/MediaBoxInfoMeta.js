import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class MediaBoxInfoMeta extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, extra, children } = this.props;
        const cls = classNames({
            'hui-media-info-meta': true,
            'hui-media-info-meta-extra': extra
        }, className);

        return (
            <li className={cls} {...this.props}>{children}</li>
        );
    }
}

MediaBoxInfoMeta.propTypes = {
    extra: PropTypes.bool
};

MediaBoxInfoMeta.defaultProps = {
    extra: false
};

export default MediaBoxInfoMeta;
