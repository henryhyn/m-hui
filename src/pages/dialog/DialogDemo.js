import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page } from '../../index';

class DialogDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='Dialog'>开发中, 敬请期待...</Page>
        );
    }
}

DialogDemo.propTypes = {};

DialogDemo.defaultProps = {};

export default DialogDemo;
