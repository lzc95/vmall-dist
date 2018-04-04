import React from 'react';
import Header from '../components/Header';
import { Carousel, WhiteSpace, WingBlank,Icon} from 'antd-mobile';
import Banner from '../components/Banner';

import '../common/css/home.css'
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100)
    }
    
    render(){
        return(
            <div className='home'> 
                <Header title="开心购物街"  hiddenLeft='true'/>
                <Carousel
                   autoplay={true}
                   infinite
                   selectedIndex={1}
                   style={{width:'100%',marginTop:45}}
                   >
                    {this.state.data.map(val => (
                       <a
                       key={val}
                       href="http://www.alipay.com"
                       style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                       >
                       <img
                           src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                           alt=""
                           style={{ width:'100%', height:204,verticalAlign: 'top' }}
                           onLoad={() => {
                           // fire window resize event to change height
                           window.dispatchEvent(new Event('resize'));
                           this.setState({ imgHeight: 'auto' });
                           }}
                       />
                       </a>
                   ))}
                 </Carousel>

                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 <Banner/>
                 
            </div>
        )
    }
}

export default Home;