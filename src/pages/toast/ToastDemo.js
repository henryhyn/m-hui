import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Button, Toast } from '../../index';

class ToastDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            showCustom: false,
            showLoading: false,
            toastTimer: null,
            customTimer: null,
            loadingTimer: null
        };
    }

    showToast() {
        this.setState({showToast: true});
        this.state.toastTimer = setTimeout(()=> {
            this.setState({showToast: false});
        }, 2000);
    }

    showCustom() {
        this.setState({showCustom: true});
        this.state.customTimer = setTimeout(()=> {
            this.setState({showCustom: false});
        }, 2000);
    }

    showLoading() {
        this.setState({showLoading: true});
        this.state.loadingTimer = setTimeout(()=> {
            this.setState({showLoading: false});
        }, 2000);
    }

    componentWillUnmount() {
        this.state.toastTimer && clearTimeout(this.state.toastTimer);
        this.state.customTimer && clearTimeout(this.state.customTimer);
        this.state.loadingTimer && clearTimeout(this.state.loadingTimer);
    }

    render() {
        return (
            <Page spacing title='Toast'>
                <Button onClick={this.showToast.bind(this)}>Toast</Button>
                <Button onClick={this.showCustom.bind(this)}>Custom Toast</Button>
                <Button onClick={this.showLoading.bind(this)}>Loading</Button>
                <Toast show={this.state.showToast}>完成</Toast>
                <Toast show={this.state.showCustom} icon='waiting-circle'>waiting...</Toast>
                <Toast show={this.state.showLoading} icon='loading'>正在加载中...</Toast>
            </Page>
        );
    }
}

ToastDemo.propTypes = {};

ToastDemo.defaultProps = {};

export default ToastDemo;
