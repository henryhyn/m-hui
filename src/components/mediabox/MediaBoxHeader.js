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
        const { className, children } = this.props;
        const cls = classNames({
            'hui-media-hd': true
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

MediaBoxHeader.propTypes = {};

MediaBoxHeader.defaultProps = {};

export default MediaBoxHeader;
