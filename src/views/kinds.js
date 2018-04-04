import React from 'react';
import Aside from '../components/Aside';
import Search from '../components/Search';
import KindsContent from '../components/KindsContent';
class Kinds extends React.Component{
    render(){
        return(
            <div >
               <Search/>
               <Aside/>
               <KindsContent/>
            </div>
        )
    }
}
export default Kinds;