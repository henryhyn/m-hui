import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class ButtonArea extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, direction, children } = this.props;
        const cls = classNames({
            'hui-btn-area': true,
            'hui-btn-area-inline': direction === 'horizontal'
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

ButtonArea.propTypes = {
    direction: PropTypes.string
};

ButtonArea.defaultProps = {
    direction: 'vertical'
};

export default ButtonArea;
