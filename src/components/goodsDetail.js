import React from 'react';
import {Icon} from 'antd';
import {withRouter} from 'react-router-dom';
import '../common/css/goodsDetail.css'
class goodsDetail extends React.Component{

    go(des){
        this.props.history.push(des)
    }
    back(){
        this.props.history.goBack() 
    }

    render(){
        return(
            <div className='goodsDetail'>
                <div>
                    <span className='left' onClick={this.back.bind(this)}><img src="/src/common/img/left.svg"/></span>
                    <div>
                        <img src="/src/common/img/user_pho.png" className='goodsPho'/>
                        <div className='goodsDetail_con'>
                             <p>帮助了非常多的小伙伴学习 Redux。目前每天浏览量大概在一万左右。如果你有时间，希望你和我们一起翻译</p>
                             <p><span className="price">¥222</span></p>
                           
                        </div>
                    </div>
                    
                    <div className='footer'>
                        <ul>
                          <li className="goHome" onClick={this.go.bind(this,'/')}><img src='/src/common/img/home.svg'/></li> 
                          <li className="goCart" onClick={this.go.bind(this,'/cart')}><img src='/src/common/img/cart_1.svg'/></li> 
                          <li className="addCart">加入购物车</li>   
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(goodsDetail);