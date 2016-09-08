import React,{Component} from 'react' ;
import 'src/styles/common.css'; 
import 'src/styles/panel.css' ;
import 'src/styles/brandQuery.css' ;
import {Affix} from 'antd' ;
import NavBarComp from 'src/components/NavBarComp.jsx' ;
import BackTopComp from 'src/components/BackTopComp.jsx' ;

class AppLayout extends Component {
    render(){
        return (
            <div>
                <Affix>
                    <NavBarComp/>
                </Affix>

                
            </div>
        ) ;
    }
}

export default AppLayout ;
