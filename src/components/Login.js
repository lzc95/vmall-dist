import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {withRouter} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../common/css/login.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  //跳转区注册页面
  goRegister(e){
    e.preventDefault();
    this.props.history.push("/register");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
          <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入账号!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <a className="login-form-forgot" href="">忘记密码？</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              或 <a  onClick={this.goRegister.bind(this)}>现在注册</a>
            </FormItem>
          </Form>
      </div>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);
export default withRouter(LoginForm);
