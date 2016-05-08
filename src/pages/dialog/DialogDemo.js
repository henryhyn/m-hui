import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Button, Alert, Confirm } from '../../index';

class DialogDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            showConfirm: false,
            alert: {
                title: '标题标题',
                buttons: [
                    {
                        label: '好的',
                        onClick: this.hideAlert.bind(this)
                    }
                ]
            },
            confirm: {
                title: '标题标题',
                buttons: [
                    {
                        type: 'default',
                        label: '好的',
                        onClick: this.hideConfirm.bind(this)
                    },
                    {
                        type: 'primary',
                        label: '我愿意',
                        onClick: this.hideConfirm.bind(this)
                    }
                ]
            }
        };
    }

    showAlert() {
        this.setState({showAlert: true});
    }

    hideAlert() {
        this.setState({showAlert: false});
    }

    showConfirm() {
        this.setState({showConfirm: true});
    }

    hideConfirm() {
        this.setState({showConfirm: false});
    }

    render() {
        return (
            <Page className="dialog" title="Dialog" spacing>
                <Button type="warn" onClick={this.showAlert.bind(this)}>警告</Button>
                <Button type="primary" onClick={this.showConfirm.bind(this)}>确认</Button>


                <Alert title={this.state.alert.title} buttons={this.state.alert.buttons} show={this.state.showAlert}>
                    警告内容
                </Alert>
                <Confirm title={this.state.confirm.title} buttons={this.state.confirm.buttons}
                         show={this.state.showConfirm}>
                    确认内容？
                </Confirm>
            </Page>
        );
    }
}

DialogDemo.propTypes = {};

DialogDemo.defaultProps = {};

export default DialogDemo;
