import React,{Component} from 'react' ;
import {BackTop} from 'antd';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#57c5f7',
  color: '#fff',
  textAlign: 'center',
  fontSize: 20,
};


export default class BackTopComp extends Component {
    constructor(props){
        super(props) ;
    }
    render(){
        return (
           <BackTop style={{ bottom: 100 }}>
              <div style={style}>UP</div>
           </BackTop>
        ) ;
    }
}