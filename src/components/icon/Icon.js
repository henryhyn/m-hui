require('./hui_icon_font.less');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, value, size } = this.props;
        const cls = classNames({
            ['hui-icon-' + value]: true,
            'hui-icon-msg': size === 'large'
        }, className);

        return (
            <i className={cls} {...this.props}/>
        );
    }
}

Icon.propTypes = {};

Icon.defaultProps = {};

export default Icon;
