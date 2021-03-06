import './hui_icon_font.less';
import './icon.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 图标
 * @param {string} value - 图标类型, 可选 success, 默认 success
 * @param {string} size - 大小, 可选 small, large, 默认 small
 */
class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, value, size } = this.props;
        const cls = classNames({
            ['hui-icon-' + value]: true,
            'hui-icon-medium': size === 'medium',
            'hui-icon-large': size === 'large'
        }, className);

        if (value === 'loading') {
            return (
                <div className="hui-loading">
                    {
                        [...Array(12)].map((x, i) => {
                            return (
                                <div key={i} className={`hui-loading-leaf hui-loading-leaf-${i}`}></div>
                            );
                        })
                    }
                </div>
            );
        } else {
            return (
                <i className={cls} {...this.props}/>
            );
        }
    }
}

Icon.propTypes = {
    value: PropTypes.string,
    size: PropTypes.string
};

Icon.defaultProps = {
    value: 'success',
    size: 'small'
};

export default Icon;
