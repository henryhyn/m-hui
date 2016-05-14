import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Form, FormCell, CellBody, CellFooter, Radio } from '../../index';

class RadioBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderData(data) {
        return data.map((item, i) => {
            return (
                <FormCell radio key={i} {...item}>
                    <CellBody>{item.label}</CellBody>
                    <CellFooter>
                        <Radio name={this.props.name} value={item.value} onChange={this.props.onChange}
                               checked={this.props.value == item.value}/>
                    </CellFooter>
                </FormCell>
            );
        });
    }

    render() {
        const { data, children } = this.props;
        return (
            <Form radio>
                {data.length > 0 ? this.renderData(data) : children}
            </Form>
        );
    }
}

RadioBox.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    data: PropTypes.array
};

RadioBox.defaultProps = {
    name: '',
    value: undefined,
    onChange: ()=> {
    },
    data: []
};

export default RadioBox;
