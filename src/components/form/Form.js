import './form.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { children, className, radio, checkbox } = this.props;
        const cls = classNames({
            'hui-cells': true,
            'hui-cells-form': !radio && !checkbox,
            'hui-cells-radio': radio,
            'hui-cells-checkbox': checkbox
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

Form.propTypes = {
    radio: PropTypes.bool,
    checkbox: PropTypes.bool
};

Form.defaultProps = {
    radio: false,
    checkbox: false
};

export default Form;
