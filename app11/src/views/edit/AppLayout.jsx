import React,{Component} from 'react' ;
import 'src/styles/common.css'; 
import 'src/styles/panel.css' ;
import 'src/styles/brandQuery.css' ;
import 'src/styles/querySection.css' ;
import {Affix} from 'antd' ;
import NavBarComp from 'src/components/NavBarComp.jsx' ;
import BackTopComp from 'src/components/BackTopComp.jsx' ;
import QuerySection from './QuerySection.jsx' ;
import MainContent from './MainContent.jsx' ;

class AppLayout extends Component {
    render(){
        return (
            <div>
                <Affix>
                    <NavBarComp/>
                    <QuerySection/>
                </Affix>
                <MainContent/>
            </div>
        ) ;
    }
}

export default AppLayout ;
