
// 收藏列表
import React from 'react';
import {Icon} from 'antd';
import {WhiteSpace,Button,Modal} from 'antd-mobile';
import Header from '../components/Header';
import '../common/css/list.css';

const alert = Modal.alert;

let list=[
    {id:1, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'},
    {id:2, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'},
    {id:3, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'},
    {id:4, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'},
    {id:5, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'},
    {id:6, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'},
    {id:7, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'},
    {id:8, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'},
    {id:9, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'},
    {id:10, name:'OPPO R15全面屏双摄拍照手机R15全面屏双摄拍照手机'}

]

class List extends React.Component{
    goDetail(arg){
        let url='/goodsDetail?'
        this.props.history.push(url+arg)
    }

     render(){
         return(
             <div className='collect'>
                <div className='collect_list'>
                    <Header title='我的收藏'/>
                    <div>
                        <ul>
                        {
                            list.map((item)=>{
                                return(
                                    <li key={item.id} >
                                        <span onClick={this.goDetail.bind(this,item.id)}>
                                          <img src='/src/common/img/user_pho.png'/>
                                          <span className='goodsCon'>{item.name}</span>
                                        </span>
                                        <Icon type="delete" style={{ fontSize:30, color: '#ccc' }}  onClick={() =>
                                                alert('删除提醒', '确认要删除此收藏物品么?', [
                                                { text: '取消', onPress: () => console.log('cancel') },
                                                { text: '确认', onPress: () => console.log('ok') },
                                                ])
                                            }/>
                                        <WhiteSpace/>
                                    </li>

                                )
                            })
                        }
                        </ul>
                        <p style={{color:'#3E90F7',textAlign:'center'}}>***^_^人家是有底线的^_^***</p>
                    </div>
                </div>
             </div>

         )
     }
}
export default List;
