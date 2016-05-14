import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Cell, CellHeader, CellBody, CellFooter, Cells, CellsTitle, CellsTips } from '../../index';
import iconSrc from './icon.png';

class CellDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='Cell'>
                <CellsTitle>带说明的列表项</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带图标、说明的列表项</CellsTitle>
                <Cells>
                    <Cell>
                        <CellHeader>
                            <img src={iconSrc} alt="" style={{display: 'block', width: '20px', marginRight: '5px'}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={iconSrc} alt="" style={{display: 'block', width: '20px', marginRight: '5px'}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带说明、跳转的列表项</CellsTitle>
                <Cells access>
                    <Cell href="javascript:;">
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell access={false}>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带图标、说明、跳转的列表项</CellsTitle>
                <Cells access>
                    <Cell href="javascript:;">
                        <CellHeader>
                            <img src={iconSrc} alt="" style={{display: 'block', width: '20px', marginRight: '5px'}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell access={false}>
                        <CellHeader>
                            <img src={iconSrc} alt="" style={{display: 'block', width: '20px', marginRight: '5px'}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>
            </Page>
        );
    }
}

CellDemo.propTypes = {};

CellDemo.defaultProps = {};

export default CellDemo;
