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
        if(values.userName == 'luozc' && values.password == '1995'){
          this.props.history.push("/index");
        }
        else{
          console.log('你就是进不去！')
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='register'>
          <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          <FormItem>
              {getFieldDecorator('nickName', {
                rules: [{ required: true, message: '请输入昵称!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="给自己起一个霸气的昵称" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入账号!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('repassword', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="再次输入密码" />
              )}
            </FormItem>
            <FormItem> 
              <Button type="primary" htmlType="submit" className="login-form-button">
                立即注册
              </Button>
              或 <a href="">去登录</a>
            </FormItem>
          </Form>
      </div>
    );
  }
}

const RegisterForm = Form.create()(NormalLoginForm);
export default RegisterForm;
