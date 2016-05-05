import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Cell, CellHeader, CellBody, CellFooter, Cells, CellsTitle, CellsTips } from '../../index';

class CellDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <CellsTitle>a</CellsTitle>
                <Cells>
                    <Cell>
                        <CellHeader>a</CellHeader>
                        <CellBody>b</CellBody>
                        <CellFooter>c</CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>a</CellHeader>
                        <CellBody>b</CellBody>
                        <CellFooter>c</CellFooter>
                    </Cell>
                </Cells>
                <CellsTips>dd</CellsTips>
            </Page>
        );
    }
}

CellDemo.propTypes = {};

CellDemo.defaultProps = {};

export default CellDemo;
