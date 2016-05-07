import './popup.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Popup
 *
 * 用法: <Popup>文本</Popup>
 */
class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { show, onRequestClose, children } = this.props;
        const className = classNames({
            'hui-popup-modal': true,
            'hui-popup-modal-visible': show
        });

        return (
            <div className={className} onClick={onRequestClose}>
                {children}
            </div>
        );
    }
}

Popup.propTypes = {
    show: PropTypes.bool,
    onRequestClose: PropTypes.func
};

Popup.defaultProps = {
    show: false,
    onRequestClose: ()=> {
    }
};

export default Popup;
