import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Icon } from '../../index';

/**
 * 进度条
 *
 * progress用于上传、下载等耗时并且需要显示进度的场景，用户可以随时中断该操作。
 * @param {number} value - 是否透明, 默认 0
 */
class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderOpr() {
        if (this.props.onClick) {
            return (
                <a href="javascript:;" className="hui-progress-opr" onClick={this.props.onClick}>
                    <Icon value="cancel"/>
                </a>
            );
        }
    }

    render() {
        let { value } = this.props;
        value = Math.max(value, 0);
        value = Math.min(value, 100);

        return (
            <div className="hui-progress">
                <div className="hui-progress-bar">
                    <div className="hui-progress-inner-bar" style={{width: `${value}%`}}></div>
                </div>
                {
                    this._renderOpr()
                }
            </div>
        );
    }
}

Progress.propTypes = {
    value: PropTypes.number
};

Progress.defaultProps = {
    value: 0
};

export default Progress;
