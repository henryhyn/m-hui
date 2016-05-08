import './searchbar.less';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Icon } from '../../index';

/**
 * 搜索栏
 *
 * 搜索栏，类似于微信原生的搜索栏，应用于常见的搜索场景。
 * @param {bool} transparent - 是否透明, 默认 false
 */
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            text: ''
        };
    }

    changeHandle(e) {
        let text = e.target.value;
        this.setState({text});
        if (this.props.onChange) {
            this.props.onChange(text, e);
        }
    }

    cancelHandle(e) {
        this.setState({focus: false});
        if (this.props.onCancel) {
            this.props.onCancel(e);
        }
    }

    clearHandle(e) {
        this.setState({text: ''});
        if (this.props.onClear) {
            this.props.onClear(e);
        }
        if (this.props.onChange) {
            this.props.onChange('', e);
        }
    }

    render() {
        const { className, placeholder, children } = this.props;
        const cls = classNames({
            'hui-search-bar': true,
            'hui-search-focusing': this.state.focus
        }, className);

        return (
            <div className={cls}>
                <form className='hui-search-outer'>
                    <div className='hui-search-inner'>
                        <Icon value='search'/>
                        <input
                            ref='searchInput'
                            type='search'
                            className='hui-search-input'
                            placeholder={placeholder}
                            onFocus={e=>this.setState({focus:true})}
                            onBlur={e=>this.setState({focus:false})}
                            onChange={this.changeHandle.bind(this)}
                            value={this.state.text}
                            />
                        {/*React will not trigger onMouseDown when not onClick presented*/}
                        <a
                            className='hui-icon-clear'
                            onClick={e=>e/*issues #59*/}
                            onMouseDown={this.clearHandle.bind(this)}
                            />
                    </div>
                    <label
                        className='hui-search-text'
                        onClick={e=>ReactDOM.findDOMNode(this.refs.searchInput).focus()}
                        style={{display: this.state.text ? 'none' : null}}
                        >
                        <Icon value='search'/>
                        <span>{placeholder}</span>
                    </label>
                </form>
                <a className='hui-search-cancel' onClick={this.cancelHandle.bind(this)}>{this.props.lang.cancel}</a>
            </div>
        );
    }
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onCancel: PropTypes.func,
    lang: PropTypes.object
};

SearchBar.defaultProps = {
    placeholder: '搜索',
    onChange: undefined,
    onClear: undefined,
    onCancel: undefined,
    lang: {
        cancel: '取消'
    }
};

export default SearchBar;
