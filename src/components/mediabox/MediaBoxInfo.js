import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { MediaBoxInfoMeta } from '../../index';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class MediaBoxInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderData(metas) {
        return metas.map((meta, i) => {
            return <MediaBoxInfoMeta key={i} extra={meta.extra}>{meta.label}</MediaBoxInfoMeta>;
        });
    }

    render() {
        const { className, data, children } = this.props;
        const cls = classNames({
            'list-inline': true,
            'hui-media-info': true
        }, className);

        return (
            <ul className={cls} {...this.props}>
                {data.length > 0 ? this.renderData(data) : children}
            </ul>
        );
    }
}

MediaBoxInfo.propTypes = {
    data: PropTypes.array
};

MediaBoxInfo.defaultProps = {
    data: []
};

export default MediaBoxInfo;
