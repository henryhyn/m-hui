import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import {
    Page,
    ButtonArea,
    Button,
    Cells,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Form,
    FormCell,
    Icon,
    Input,
    Label,
    TextArea,
    Switch,
    Radio,
    Checkbox,
    Select,
    Uploader
} from '../../index';
import vcodeSrc from './vcode.jpg';
import avatarSrc from './avatar.jpg';

class FormDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFiles: [
                {
                    url: avatarSrc,
                    onClick: e=>alert('事件测试')
                },
                {
                    url: avatarSrc
                },
                {
                    url: avatarSrc
                },
                {
                    url: avatarSrc,
                    error: true
                },
                {
                    url: avatarSrc,
                    status: '50%'
                }
            ]
        };
    }

    render() {
        return (
            <Page title="Cell">
                <CellsTitle>单选列表项</CellsTitle>
                <Form radio>
                    <FormCell radio>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>
                            <Radio name="radio1" value="1" defaultChecked/>
                        </CellFooter>
                    </FormCell>
                    <FormCell radio>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>
                            <Radio name="radio1" value="2"/>
                        </CellFooter>
                    </FormCell>
                </Form>

                <CellsTitle>复选列表项</CellsTitle>
                <Form checkbox>
                    <FormCell checkbox>
                        <CellHeader>
                            <Checkbox name="checkbox1" value="1"/>
                        </CellHeader>
                        <CellBody>标题文字</CellBody>
                    </FormCell>
                    <FormCell checkbox>
                        <CellHeader>
                            <Checkbox name="checkbox2" value="2" defaultChecked/>
                        </CellHeader>
                        <CellBody>标题文字</CellBody>
                    </FormCell>
                </Form>

                <CellsTitle>开关</CellsTitle>
                <Form>
                    <FormCell switch>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>
                            <Switch/>
                        </CellFooter>
                    </FormCell>
                </Form>

                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>qq</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入qq号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode={true}>
                        <CellHeader>
                            <Label>验证码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入验证码"/>
                        </CellBody>
                        <CellFooter>
                            <img src={vcodeSrc}/>
                        </CellFooter>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>银行卡</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入银行卡号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode={true} warn={true}>
                        <CellHeader>
                            <Label>验证码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入验证码"/>
                        </CellBody>
                        <CellFooter>
                            <Icon value="warn"/>
                            <img src={vcodeSrc}/>
                        </CellFooter>
                    </FormCell>
                </Form>

                <CellsTitle>上传</CellsTitle>
                <Form>
                    <FormCell>
                        <CellBody>
                            <Uploader
                                title="图片上传"
                                maxCount={6}
                                files={this.state.demoFiles}
                                onError={msg => alert(msg)}
                                onChange={(file,e) => {
                                    let newFiles = [...this.state.demoFiles, {url:file.data}];
                                    this.setState({
                                        demoFiles: newFiles
                                    });
                                }}
                                />
                        </CellBody>
                    </FormCell>
                </Form>

                <CellsTitle>文本域</CellsTitle>
                <Form>
                    <FormCell>
                        <CellBody>
                            <TextArea placeholder="请输入评论" rows="3" maxlength="200"></TextArea>
                        </CellBody>
                    </FormCell>
                </Form>

                <CellsTitle>选择</CellsTitle>
                <Form>
                    <FormCell select selectPos="before">
                        <CellHeader>
                            <Select>
                                <option value="1">+86</option>
                                <option value="2">+80</option>
                                <option value="3">+84</option>
                                <option value="4">+87</option>
                            </Select>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入号码"/>
                        </CellBody>
                    </FormCell>
                </Form>

                <CellsTitle>选择</CellsTitle>
                <Form>
                    <FormCell select>
                        <CellBody>
                            <Select defaultValue="2">
                                <option value="1">微信号</option>
                                <option value="2">QQ号</option>
                                <option value="3">Email</option>
                            </Select>
                        </CellBody>
                    </FormCell>
                    <FormCell select selectPos="after">
                        <CellHeader>国家/地区</CellHeader>
                        <CellBody>
                            <Select data={[
                                {
                                    value: 1,
                                    label: '中国'
                                },
                                {
                                    value: 2,
                                    label: '美国'
                                },
                                {
                                    value: 3,
                                    label: '英国'
                                }
                            ]}/>
                        </CellBody>
                    </FormCell>
                </Form>
            </Page>
        );
    }
}

FormDemo.propTypes = {};

FormDemo.defaultProps = {};

export default FormDemo;
