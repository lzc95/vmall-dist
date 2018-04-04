import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import App from '../container/index'

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {mapStateToProps,mapDispatchToProps }from '../container/index'
import counterReducer from '../reducers/index';

import thunk from 'redux-thunk';


const store = createStore(counterReducer,applyMiddleware(thunk))

class Movie extends React.Component{
    render(){
        return(
            <div>
              <Header />
                  <Provider store={store}>
                     <App/>
                  </Provider>
              <Footer />
            </div>
        )
    }
}

export default Movie;