import React from 'react';
import Header from '../components/Header';

import '../common/css/cart.css'
class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cartState:false
        }
    }
   //跳转区购物 
    goShopping(){
        this.props.history.push("/kinds");
    }

    render(){
        let cartCon;
        if(this.state.cartState){
            cartCon=(
                <div></div>
            )
        }
        else{
            cartCon=(
                <div className='empty_cart'>
                     <img src="/src/common/img/cart.svg"  />
                     <span>购物车空空如也，去逛逛吧</span> 
                     <p><button onClick={this.goShopping.bind(this)}>去购物...</button></p>   
                </div>
            )
        }

        return(
            <div className='cart'>
                <div style={{marginLeft:10}}>
                <Header title="购物车" hiddenLeft='true'/>
                 <div>
                   {cartCon} 
                 </div>
                </div>
            </div>
        )
    }
}

export default Cart;