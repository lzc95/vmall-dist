import React from 'react';
import {Icon} from 'antd';
import {withRouter} from 'react-router-dom';
import Search from '../components/Search'
import '../common/css/searchGoods.css'

let goodsList=[
    {id:1,descr:'如果你有时间，希望你和我们一起翻译，帮助更多人，欢迎提交 PR',price:222},
    {id:2,descr:'如果你有时间，希望你和我们一起翻译，帮助更多人，欢迎提交 PR',price:222},
    {id:3,descr:'如果你有时间，希望你和我们一起翻译，帮助更多人，欢迎提交 PR',price:222},
    {id:4,descr:'如果你有时间，希望你和我们一起翻译，帮助更多人，欢迎提交 PR',price:222},
    {id:5,descr:'如果你有时间，希望你和我们一起翻译，帮助更多人，欢迎提交 PR',price:222},
    {id:6,descr:'如果你有时间，希望你和我们一起翻译，帮助更多人，欢迎提交 PR',price:222},
    {id:7,descr:'如果你有时间，希望你和我们一起翻译，帮助更多人，欢迎提交 PR',price:222}
]
class searchGoods extends React.Component{
    back(){
        this.props.history.goBack();
    }

    goDetail(arg){
        let url='/goodsDetail?'
        this.props.history.push(url+arg)
    }

    render(){
        return(
            <div className='searchGoods'>
                <div>
                    <span style={{fontSize:28,position:'fixed',
                    left:0,top:3,zIndex:100,color:'#ccc'}}
                    onClick={this.back.bind(this)}
                    ><img src='/src/common/img/left_s.svg'/></span>
                    <Search/>
                </div>
                <div>
                    <ul className='rules'>
                        <li style={{color:'#3E90F7'}}>时间</li>
                        <li>销量</li>
                        <li>价格</li>
                    </ul>
                </div>
                <div className='goodsList'>
                    <ul>
                        {
                            goodsList.map((item)=>{
                                return(
                                    <li key={item.id} onClick={this.goDetail.bind(this,item.id)}>
                                        <p className='goods_pic'><img src="/src/common/img/user_pho.png"/></p>
                                        <p className='goods_descr'>
                                            <span>{item.descr}</span><br/>
                                            <span className="price">¥{item.price}</span>
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(searchGoods);
