import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import {
    Page,
    Cells,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Button,
    ButtonArea,
    Form,
    FormCell,
    Icon,
    Input,
    Label,
    TextArea,
    Switch,
    Radio,
    RadioBox,
    Checkbox,
    Select,
    Uploader,
    Hex
} from '../../index';
import vcodeSrc from './vcode.jpg';
import avatarSrc from './avatar.jpg';

class FormDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            single: '2',
            contact: '2',
            country: '1',
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
                <RadioBox name='single' value={this.state.single} onChange={Hex.handleChange.bind(this)}
                          data={[{value: 1, label: '标题文字1'}, {value: 2, label: '标题文字2'}]}/>

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
                            <Checkbox name="checkbox2" value="2"/>
                        </CellHeader>
                        <CellBody>标题文字</CellBody>
                    </FormCell>
                </Form>

                <CellsTitle>开关</CellsTitle>
                <Form>
                    <FormCell switch>
                        <CellBody>标题文字</CellBody>
                        <CellFooter>
                            <Switch name='open' checked={this.state.open} onChange={Hex.handleChange.bind(this)}/>
                        </CellFooter>
                    </FormCell>
                </Form>

                <CellsTitle>表单</CellsTitle>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>qq</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入qq号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell vcode>
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
                    <FormCell vcode warn>
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
                    <FormCell>
                        <CellHeader>
                            <Label>银行卡</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入银行卡号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell warn>
                        <CellHeader>
                            <Label>银行卡</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="number" placeholder="请输入银行卡号"/>
                        </CellBody>
                        <CellFooter>
                            <Icon value="warn"/>
                        </CellFooter>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>日期</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="date"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>时间</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="datetime-local"/>
                        </CellBody>
                    </FormCell>
                </Form>
                <CellsTips>底部说明文字底部说明文字</CellsTips>

                <ButtonArea>
                    <Button>按钮</Button>
                </ButtonArea>

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
                            <Select
                                data={[{value: 1, label: '+86'}, {value: 2, label: '+80'}, {value: 3, label: '+84'}, {value: 4, label: '+87'}]}/>
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
                            <Select name='contact' value={this.state.contact} onChange={Hex.handleChange.bind(this)}
                                    data={[{value: 1, label: '微信号'}, {value: 2, label: 'QQ号'}, {value: 3, label: 'Email'}]}/>
                        </CellBody>
                    </FormCell>
                    <FormCell select selectPos="after">
                        <CellHeader>国家/地区</CellHeader>
                        <CellBody>
                            <Select name='country' value={this.state.country} onChange={Hex.handleChange.bind(this)}
                                    data={[{value: 1, label: '中国'}, {value: 2, label: '美国'}, {value: 3, label: '英国'}]}/>
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
