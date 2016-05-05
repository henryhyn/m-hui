import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Button } from '../../index';

class ButtonDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <Button/>
                <Button href='http://www.baidu.com'/>
            </Page>
        );
    }
}

ButtonDemo.propTypes = {};

ButtonDemo.defaultProps = {};

export default ButtonDemo;
