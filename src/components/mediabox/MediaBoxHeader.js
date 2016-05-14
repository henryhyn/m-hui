import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class MediaBoxHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, small, medium, large, children } = this.props;
        const cls = classNames({
            'hui-media-hd': true,
            'hui-media-sm': small,
            'hui-media-md': medium,
            'hui-media-lg': large
        }, className);

        let childrenWithProps = React.Children.map(children, child => {
            if (child.type == 'img' && !child.props.className) {
                return React.cloneElement(child, {className: 'hui-media-appmsg-thumb'});
            } else {
                return child;
            }
        });

        return (
            <div className={cls} {...this.props}>{childrenWithProps}</div>
        );
    }
}

MediaBoxHeader.propTypes = {
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool
};

MediaBoxHeader.defaultProps = {
    small: true,
    medium: false,
    large: false
};

export default MediaBoxHeader;
