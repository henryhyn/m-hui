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
                <Button>primary</Button>
                <Button disabled>primary disabled</Button>
                <Button type='default'>default</Button>
                <Button type='default' disabled>default disabled</Button>
                <Button type='warn'>warn</Button>
                <Button type='warn' disabled>warn disabled</Button>
                <Button plain>plain primary</Button>
                <Button plain disabled>plain primary disabled</Button>
                <Button plain type='default'>plain default</Button>
                <Button plain type='default' disabled>plain default disabled</Button>
            </Page>
        );
    }
}

ButtonDemo.propTypes = {};

ButtonDemo.defaultProps = {};

export default ButtonDemo;
