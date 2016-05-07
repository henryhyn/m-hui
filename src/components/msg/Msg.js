import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Button, Icon } from '../../index';

/**
 * 消息页面
 *
 * 结果页通常来说可以认为进行一系列操作步骤后，作为流程结束的总结性页面。结果页的作用主要是告知用户操作处理结果以及必要的相关细节（可用于确认之前的操作是否有误）等信息；若该流程用于开启或关闭某些重要功能，可在结果页增加与该功能相关的描述性内容；除此之外，结果页也可以承载一些附加价值操作，例如提供抽奖、关注公众号等功能入口。
 * @param {string} type - 是否透明, 默认 success
 * @param {array} buttons - 是否透明, 默认 []
 */
class Msg extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderButtons() {
        return this.props.buttons.map((button, idx) => {
            const {type, label} = button;

            return (
                <Button key={idx} {...button} type={type}>{label}</Button>
            );
        });
    }

    render() {
        return (
            <div className="hui-msg">
                <div className="hui-icon-area">
                    <Icon value={this.props.type} className="hui-icon-msg"/>
                </div>
                <div className="hui-text-area">
                    <h2 className="hui-msg-title">{this.props.title}</h2>

                    <p className="hui-msg-desc">{this.props.description}</p>
                </div>
                <div className="hui-opr-area">
                    <p className="hui-btn-area">
                        {this.renderButtons()}
                    </p>
                </div>
                <div className="hui-extra-area">
                    {
                        this.props.extraHref ?
                            <a href={this.props.extraHref} className="hui-extra-link">{this.props.extraText}</a> :
                            <p className="hui-extra-text">{this.props.extraText}</p>
                    }
                </div>
            </div>
        );
    }
}

Msg.propTypes = {
    type: PropTypes.string,
    buttons: PropTypes.array
};

Msg.defaultProps = {
    type: 'success',
    buttons: []
};

export default Msg;
