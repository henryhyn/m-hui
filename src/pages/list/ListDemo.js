import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, List, ListItem } from '../../index';

class ListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <List>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                </List>
            </Page>
        );
    }
}

ListDemo.propTypes = {};

ListDemo.defaultProps = {};

export default ListDemo;
