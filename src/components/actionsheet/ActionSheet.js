import './actionsheet.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Mask } from '../../index';

/**
 * ActionSheet
 *
 * ActionSheet用于显示包含一系列可交互的动作集合，包括说明、跳转等。由底部弹出，一般用于响应用户对页面的点击。
 * @param {bool} transparent - 是否透明, 默认 false
 */
class ActionSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { show, onRequestClose } = this.props;
        const className = classNames({
            'hui-actionsheet': true,
            'hui-actionsheet-toggle': show
        });

        return (
            <div>
                <Mask style={{display: show ? 'block' : 'none'}} onClick={onRequestClose}/>

                <div className={className}>
                    <div className="hui-actionsheet-menu">
                        {this.renderMenuItem()}
                    </div>
                    <div className="hui-actionsheet-action">
                        {this.renderActions()}
                    </div>
                </div>
            </div>
        );
    }

    renderMenuItem() {
        return this.props.menus.map((menu, idx) => {
            const {label, className} = menu;
            const cls = classNames({
                'hui-actionsheet-cell': true
            }, className);

            return (
                <div key={idx} {...menu} className={cls}>{label}</div>
            );
        });
    }

    renderActions() {
        return this.props.actions.map((action, idx) => {
            const {label, className} = action;
            const cls = classNames({
                'hui-actionsheet-cell': true
            }, className);

            return (
                <div key={idx} {...action} className={cls}>{label}</div>
            );
        });
    }
}

ActionSheet.propTypes = {
    menus: PropTypes.array,
    actions: PropTypes.array,
    show: PropTypes.bool,
    onRequestClose: PropTypes.func
};

ActionSheet.defaultProps = {
    menus: [],
    actions: [],
    show: false,
    onRequestClose: ()=> {
    }
};

export default ActionSheet;
