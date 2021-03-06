import React from "react";
import {HashRouter as Router,Route,Switch} from 'react-router-dom';


// 导入路由组件
import TabBarMenu from '../components/TabBarMenu';
import Home from '../views/Home';
import Kinds from '../views/kinds';
import Cart from '../views/Cart';
import User from '../views/User';
import RegisterForm from '../components/Register';
import CollectList from '../components/List';
import Address from '../components/Address';
import goodsDetail from '../components/goodsDetail';
import searchGoods from '../components/searchGoods'
import NotFound from '../components/NotFound';
class Routes extends React.Component{
   render(){
        return(
            <Router>   
                <div>
                    
                    <TabBarMenu /> 
                    <Switch>
                      <Route path='/' exact component={Home}/>
                      <Route path='/kinds'  component={Kinds}/>
                      <Route path='/cart'  component={Cart}/>
                      <Route path='/user' component={User}/> 
                      <Route path='/register' component={RegisterForm}/> 
                      <Route path='/collect' component={CollectList}/>
                      <Route path='/addressManage' component={Address}/>
                      <Route path='/searchGoods' component={searchGoods}/>
                      <Route path='/goodsDetail' component={goodsDetail}/>

                      <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
   }
}

export default Routes;