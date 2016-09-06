import React,{Component} from 'react' ;
import NavBarComp from 'src/components/NavBarComp.jsx' ;
import {Affix} from 'antd' ;
import 'src/styles/common.css'; 
import QuerySection from './QuerySection.jsx' ;

export default class AppLayout extends Component {
    constructor(props){
        super(props) ;
    }
    render(){
        return (
            <div>
                <Affix>
                    <NavBarComp/>
                    <QuerySection/>
                </Affix>

            </div>
        ) ;
    }
}