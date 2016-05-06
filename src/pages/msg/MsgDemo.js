import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page } from '../../index';

class MsgDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='Msg'>开发中, 敬请期待...</Page>
        );
    }
}

MsgDemo.propTypes = {};

MsgDemo.defaultProps = {};

export default MsgDemo;
