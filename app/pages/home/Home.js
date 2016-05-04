import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Grids } from '../../index';

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
            <Grids data={this.state.components}/>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
