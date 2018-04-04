import React from 'react';
import '../common/css/aside.css'

let items = [
 {id:1, name:'foo'},
 {id:2, name:'bar'},
 {id:3, name:'foo'},
 {id:4, name:'bar'},
 {id:5, name:'foo'},
 {id:6, name:'bar'},
 {id:7, name:'foo'},
 {id:8, name:'bar'},
 {id:9, name:'foo'},
 {id:10, name:'bar'},
 {id:11, name:'foo'},
 {id:12, name:'bar'},
 {id:13, name:'foo'},
 {id:14, name:'bar'},
 {id:15, name:'foo'},
 {id:16, name:'bar'},
 {id:17, name:'foo'},
 {id:18, name:'bar'},
 {id:19, name:'foo'},
 {id:20, name:'bar'},
];

class Aside extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            asideId:1
        }
    }


    render(){
        return(
            <div className="aside">
              <ul>
                {
                   items.map((item)=>{
                    return(<li key={item.id} >{item.name}</li>)
                   })
                 }
              </ul>
            </div>
        )
    }
}
export default Aside;
