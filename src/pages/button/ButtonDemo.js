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
            <Page spacing title='Button'>
                <Button>按钮</Button>
                <Button disabled>按钮</Button>
                <Button type='warn'>按钮</Button>
                <Button type='warn' disabled>按钮</Button>
                <Button type='default'>按钮</Button>
                <Button type='default' disabled>按钮</Button>

                <div className='hui-minipage'>
                    <Button plain>按钮</Button>
                    <Button plain type='default'>按钮</Button>

                    <Button size='small'>按钮</Button>
                    <Button type='default' size='small'>按钮</Button>
                </div>
            </Page>
        );
    }
}

ButtonDemo.propTypes = {};

ButtonDemo.defaultProps = {};

export default ButtonDemo;
