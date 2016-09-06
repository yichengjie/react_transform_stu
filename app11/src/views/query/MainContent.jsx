import React,{Component} from 'react' ;
import { Collapse,Button,Row, Col ,Card } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class MainContent extends Component{
    render(){
        return (
            <div className ="container">
                <div className="nav_oper_btns">
                    <Button type ="primary" >新建品牌集</Button>
                    <Button  >发布</Button>
                    <Button >截止</Button>
                    <Button >删除</Button>
                </div>
                <Card >
                    
                    <p>{text}</p>
                </Card>
            </div>
        ) ;
    }
}

export default MainContent ;