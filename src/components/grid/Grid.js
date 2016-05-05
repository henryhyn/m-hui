import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { GridIcon, GridLabel } from '../../index';

class Grid extends Component {
    render() {
        const { icon, label, children } = this.props;
        return (
            <a {...this.props}>
                {icon ? <GridIcon>{icon}</GridIcon> : false}
                {children}
                {label ? <GridLabel>{label}</GridLabel> : false}
            </a>
        );
    }
}

Grid.propTypes = {
    icon: PropTypes.any,
    label: PropTypes.string
};

Grid.defaultProps = {
    icon: false,
    label: ''
};

export default Grid;
