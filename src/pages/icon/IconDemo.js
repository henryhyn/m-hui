import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Icon } from '../../index';

class IconDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='图标'>
                <Icon size='large' value='cancel'/>
                <Icon size='large' value='circle'/>
                <Icon size='large' value='clear'/>

                <Icon size='large' value='download'/>
                <Icon size='large' value='info'/>
                <Icon size='large' value='info-circle'/>

                <Icon size='large' value='safe-success'/>
                <Icon size='large' value='safe-warn'/>
                <Icon size='large' value='search'/>


                <div className='hui-minipage'>
                    <Icon value='success'/>
                    <Icon value='success-circle'/>
                    <Icon value='success-no-circle'/>

                    <Icon value='waiting'/>
                    <Icon value='waiting-circle'/>
                    <Icon value='warn'/>
                </div>
            </Page>
        );
    }
}

IconDemo.propTypes = {};

IconDemo.defaultProps = {};

export default IconDemo;
