import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Grids } from '../../index';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [{
                icon: 'IconButton',
                label: 'IconButton',
                href: 'button'
            }, {
                icon: 'IconButton',
                label: 'IconButton',
                href: 'button'
            }]
        };
    }

    render() {
        return (
            <Page>
                <Grids data={this.state.components}/>
            </Page>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
