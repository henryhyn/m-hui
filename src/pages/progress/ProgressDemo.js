import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Button, Progress } from '../../index';

class ProgressDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            timer: null,
            isUploading: false
        };
    }

    start() {
        if (this.state.isUploading) {
            return;
        }

        this.state.isUploading = true;
        this.upload();
    }

    pause() {
        this.setState({isUploading: false});
    }

    upload() {
        if (!this.state.isUploading) {
            return;
        }
        this.setState({value: ++this.state.value % 100});
        this.state.toastTimer = setTimeout(this.upload.bind(this), 20);
    }

    componentWillUnmount() {
        this.state.toastTimer && clearInterval(this.state.toastTimer);
    }

    render() {
        return (
            <Page title="Progress" spacing>
                <Progress value={this.state.value} onClick={this.pause.bind(this)}/>
                <br/>
                <Button onClick={this.start.bind(this)} disabled={this.state.isUploading}>上传</Button>
            </Page>
        );
    }
}

ProgressDemo.propTypes = {};

ProgressDemo.defaultProps = {};

export default ProgressDemo;
