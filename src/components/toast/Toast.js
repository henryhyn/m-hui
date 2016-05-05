require('./toast.less');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Mask, Icon } from '../../index';

class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, show, icon, iconSize, children } = this.props;
        const cls = classNames({
            'hui-loading-toast': icon === 'loading'
        }, className);

        return (
            <div className={cls} style={{display: show ? 'block' : 'none'}}>
                <Mask transparent/>

                <div className="hui-toast">
                    <Icon value={icon} size={iconSize}/>

                    <p className="hui-toast-content">{children}</p>
                </div>
            </div>
        );
    }
}

Toast.propTypes = {
    show: PropTypes.bool,
    icon: PropTypes.string,
    iconSize: PropTypes.string
};

Toast.defaultProps = {
    show: false,
    icon: 'toast',
    iconSize: 'large'
};

export default Toast;
