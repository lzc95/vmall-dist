import React from 'react';
import {withRouter} from 'react-router-dom';
import '../common/css/kindsContent.css';

let items = [
    {id:1, src:'/src/common/img/phone.png',name:'小米6'},
    {id:2, src:'/src/common/img/phone.png',name:'小米6'},
    {id:3, src:'/src/common/img/phone.png',name:'小米6'},
    {id:4, src:'/src/common/img/phone.png',name:'小米6'},
    {id:5, src:'/src/common/img/phone.png',name:'小米6'},
    {id:6, src:'/src/common/img/phone.png',name:'小米6'},
    {id:7, src:'/src/common/img/phone.png',name:'小米6'},
    {id:8, src:'/src/common/img/phone.png',name:'小米6'},
    {id:9, src:'/src/common/img/phone.png',name:'小米6'},
    {id:10, src:'/src/common/img/phone.png',name:'小米6'},
    {id:11, src:'/src/common/img/phone.png',name:'小米6'},
    {id:12, src:'/src/common/img/phone.png',name:'小米6'},
    {id:13, src:'/src/common/img/phone.png',name:'小米6'},
    {id:14, src:'/src/common/img/phone.png',name:'小米6'},
    {id:15, src:'/src/common/img/phone.png',name:'小米6'},
    {id:16, src:'/src/common/img/phone.png',name:'小米6'},
    {id:17, src:'/src/common/img/phone.png',name:'小米6'},
    {id:18, src:'/src/common/img/phone.png',name:'小米6'},
    {id:19, src:'/src/common/img/phone.png',name:'小米6'},
    {id:20, src:'/src/common/img/phone.png',name:'小米6'},
    {id:21, src:'/src/common/img/phone.png',name:'小米6'},
   
   ];
class KindsContent extends React.Component{
     goSearch(arg){
         let url='/searchGoods?'
         this.props.history.push(url+arg)
     }
      render(){
          return(
          <div className="main" >
            <p className="title-logo">标题栏</p>
            <ul>
                {
                    items.map((item)=>{
                        return(<li key={item.id} onClick={this.goSearch.bind(this,item.id)}>
                             <img src={item.src}/><br/>
                             <span>{item.name}</span>
                        </li>)
                    })
                }  
            </ul>
          </div>
          )
      }
}

export default withRouter(KindsContent);