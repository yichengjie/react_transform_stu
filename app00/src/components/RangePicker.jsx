import React from 'react';
import { DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;

function onChange(value, dateString) {
  console.log('From: ', value[0], ', to: ', value[1]);
  console.log('From: ', dateString[0], ', to: ', dateString[1]);
}
class App extends React.Component{
    constructor() {
        super();
    }
    render() {
        return (
          <div>
            <RangePicker style={{ width: 184 }} onChange={onChange} />
            <br />
            <RangePicker showTime format="yyyy/MM/dd HH:mm:ss" onChange={onChange} />
          </div>
        )
    }
};
export default App ;