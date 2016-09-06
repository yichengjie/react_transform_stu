import React,{Component} from 'react' ;
import NavBarComp from 'src/components/NavBarComp.jsx' ;
import {Affix} from 'antd' ;
export default class AppLayout extends Component {
    constructor(props){
        super(props) ;
    }
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