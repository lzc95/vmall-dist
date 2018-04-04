import React from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

import '../common/css/main.css'
class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '美食',
          };
    }
  handlePrint(value){
      console.log(value)
  }

  render() {
    return (
    <div>
         <div className='search'>
            <input placeholder="搜索你要的商品"/>
         </div>
    </div>);
  }
}
 export default Search;
