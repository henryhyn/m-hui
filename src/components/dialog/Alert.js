import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Mask } from '../../index';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderButtons() {
        return this.props.buttons.map((action, idx) => {
            const {type, label} = action;
            const className = classNames({
                'hui-btn-dialog': true,
                default: type === 'default',
                primary: type === 'primary'
            });

            return (
                <a key={idx} href="javascript:;" {...action} className={className}>{label}</a>
            );
        });
    }

    render() {
        const { title, show, children } = this.props;

        return (
            <div className="hui-dialog-alert" style={{display: show ? 'block' : 'none'}}>
                <Mask/>

                <div className="hui-dialog">
                    <div className="hui-dialog-hd">
                        <strong className="hui-dialog-title">{title}</strong>
                    </div>
                    <div className="hui-dialog-bd">
                        {children}
                    </div>
                    <div className="hui-dialog-ft">
                        {this.renderButtons()}
                    </div>
                </div>
            </div>
        );
    }
}

Alert.propTypes = {
    buttons: PropTypes.array,
    show: PropTypes.bool,
    title: PropTypes.string
};

Alert.defaultProps = {
    buttons: [],
    show: false,
    title: ''
};

export default Alert;
