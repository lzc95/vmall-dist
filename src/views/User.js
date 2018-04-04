import React from 'react';
import {WhiteSpace} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header';
import LoginForm from '../components/Login';

import '../common/css/user.css'
class User extends React.Component{  
    constructor(props){
        super(props);
        this.state={
            isLogin:true
        }
    }

    Go(des){
        this.props.history.push(des)
    }

    render(){
        let user;
        if(this.state.isLogin){
           user=(
                <ul>
                    <li className='user_pho'>
                       <img src="/src/common/img/user_pho.png"/>
                       <span>开心买买买</span>
                    </li>
                    <WhiteSpace />
                    <li onClick={this.Go.bind(this,'/order')}><img src="/src/common/img/order.svg"/>我的订单</li>
                    <li onClick={this.Go.bind(this,'/collect')}><img src="/src/common/img/collect.svg"/>我的收藏</li>
                    <li onClick={this.Go.bind(this,'/addressManage')}><img src="/src/common/img/address.svg"/>收货地址</li>
                    <WhiteSpace />
                    <li className='user_exit'><button>退出登录</button></li>
                </ul>
                
            )
          }
          else{
              user=(
                 <div>
                    <LoginForm/>
                 </div>
              )
          }
          
        return(
            <div className='user_info'>
                <Header title="个人中心" hiddenLeft='true'/>
                <div style={{marginTop:70}}>
                   {user}
                </div>
            </div>
        )
    }
}

export default withRouter(User);