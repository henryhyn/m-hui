import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const cls = classNames({
            'hui-list-item': true
        });

        return (
            <li className={cls}>ListItem</li>
        );
    }
}

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
