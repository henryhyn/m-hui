import './mark.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Mark extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { type } = this.props;
        const cls = `mark-${type}`;

        return (
            <span className={cls}/>
        );
    }
}

Mark.propTypes = {
    type: PropTypes.string
};

Mark.defaultProps = {
    type: 'tuan'
};

export default Mark;
