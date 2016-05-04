import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { GridIcon, GridLabel } from '../../index';

class Grid extends Component {
    render() {
        return (
            <div>
                <GridIcon/>
                <GridLabel/>
            </div>
        );
    }
}

Grid.propTypes = {};
Grid.defaultProps = {};

export default Grid;
