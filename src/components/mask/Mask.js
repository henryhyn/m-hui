import './mask.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Mask extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, transparent } = this.props;
        const cls = classNames({
            'hui-mask': true,
            'hui-mask-transparent': transparent
        }, className);

        return (
            <div className={cls} {...this.props}/>
        );
    }
}

Mask.propTypes = {
    transparent: PropTypes.bool
};

Mask.defaultProps = {
    transparent: false
};

export default Mask;
