import React from 'react';
import {AreaSelect,AreaCascader} from 'react-area-linkage';
import {Modal} from 'antd-mobile';
import {Icon} from 'antd';
import  * as AreaData from '../data/data';
import Header from '../components/Header';

import '../common/css/main.css'
const alert = Modal.alert;

let addressList=[
    {id:'1',name:'罗增昌',address:'陕西省西安市长安区西安邮电大学长安校区'},
    {id:'2',name:'罗增昌',address:'陕西省西安市长安区西安邮电大学长安校区'}
]
class Address extends React.Component{
    handleSelectedChange(value){
        console.log(AreaData[value[0]],AreaData[value[1]],AreaData[value[2]])
    }

    render(){
        return(
            <div className='address'>
              <div style={{marginTop:60}}>
                <Header title="收货地址管理"/>
                <p><label>收货人：</label><input type='text' className='userName'/></p>
                <p><label>手机号码：</label><input type='text'/></p>
                <AreaSelect level={2} 
                   onChange={this.handleSelectedChange} 
                   size='md'
                   placeholders={['选择省','选择市','选择区']}
                />
                <input type='text' placeholder='详细地址到门牌号' className='detailedAddress'/>
                <button>+添加地址</button>
                <div className='line'> </div>
                <ul className='addressList'>
                    {
                        addressList.map((item)=>{
                               return(
                                <li key={item.id}> 
                                    <p>
                                       <span style={{display:'inline-block',width:'85%'}}>{item.name}<br/>
                                       {item.address}</span>
                                       <Icon type="delete" style={{ fontSize:30, color: 'red' }}  onClick={() =>
                                            alert('删除提醒', '确认要删除此收货地址么?', [
                                            { text: '取消', onPress: () => console.log('cancel') },
                                            { text: '确认', onPress: () => console.log('ok') },
                                            ])
                                     }/> 
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

export default Address;