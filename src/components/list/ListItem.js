import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children } = this.props;
        const cls = classNames({
            'hui-list-item': true
        });

        return (
            <a className={cls}>
                {children}
            </a>
        );
    }
}

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
