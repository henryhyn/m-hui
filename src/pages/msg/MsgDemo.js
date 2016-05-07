import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Msg } from '../../index';

class MsgDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [{
                type: 'primary',
                label: '确定',
                onClick: ()=> {

                }
            }, {
                type: 'default',
                label: '取消',
                onClick: ()=> {

                }
            }]
        };
    }

    render() {
        return (
            <Page className="msg" title="Msg" spacing>
                <Msg type="success" title="提交成功" description="你的反馈我们已经收到" buttons={this.state.buttons} extraText="查看详情"
                     extraHref="#"/>
            </Page>
        );
    }
}

MsgDemo.propTypes = {};

MsgDemo.defaultProps = {};

export default MsgDemo;
