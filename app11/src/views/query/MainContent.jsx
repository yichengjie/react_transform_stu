import React,{Component} from 'react' ;
import { Collapse,Button,Row, Col  } from 'antd';
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

                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>{text}</p>
                    </Panel>
               </Collapse>
            </div>
        ) ;
    }
}

export default MainContent ;