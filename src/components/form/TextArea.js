import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
        };
    }

    handleChange(e) {
        this.setState({textCounter: e.target.value.length});

        //forward event to props if any
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        const { className, showCounter, maxlength, onChange, children } = this.props;
        const cls = classNames({
            'hui-textarea': true
        }, className);

        return (
            <div>
                <textarea
                    className={cls}
                    maxLength={maxlength}
                    onChange={this.handleChange.bind(this)}
                    {...this.props}>
                    {children}
                </textarea>
                {
                    showCounter ?
                        <div className="hui-textarea-counter">
                            <span>{this.state.textCounter}</span>{maxlength ? '/' + maxlength : false}
                        </div>
                        : false
                }
            </div>
        );
    }
}

TextArea.propTypes = {
    showCounter: PropTypes.bool,
    defaultValue: PropTypes.string
};

TextArea.defaultProps = {
    showCounter: true,
    defaultValue: undefined
};

export default TextArea;
