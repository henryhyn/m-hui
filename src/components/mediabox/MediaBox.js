import './mediabox.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class MediaBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, type, children } = this.props;
        const Tag = this.props.href ? 'a' : 'div';
        const cls = classNames({
            'hui-media-box': true,
            'hui-media-appmsg': type === 'appmsg',
            'hui-media-text': type === 'text',
            'hui-media-small-appmsg': type === 'small-appmsg'
        }, className);

        return (
            <Tag className={cls} {...this.props}>{children}</Tag>
        );
    }
}

MediaBox.propTypes = {
    type: PropTypes.string
};

MediaBox.defaultProps = {
    type: 'text'
};

export default MediaBox;
