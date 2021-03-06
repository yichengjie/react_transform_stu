import React from 'react' ;
import { DatePicker, TimePicker } from 'antd';

const DateTimePicker = React.createClass({
  handleChange(from, value) {
    this.result = this.result || new Date();
    if (!value) {
      if (from === 'date') {
        this.selectedDate = false;
      } else {
        this.selectedTime = false;
      }
      return;
    }
    if (from === 'date') {
      this.result.setFullYear(value.getFullYear());
      this.result.setMonth(value.getMonth());
      this.result.setDate(value.getDate());
      this.selectedDate = true;
    } else {
      this.result.setHours(value.getHours());
      this.result.setMinutes(value.getMinutes());
      this.result.setSeconds(value.getSeconds());
      this.selectedTime = true;
    }
    if (this.selectedDate && this.selectedTime) {
      this.props.onSelect(this.result);
    }
  },
  handleDateChange(value) {
    this.handleChange('date', value);
  },
  handleTimeChange(value) {
    this.handleChange('time', value);
  },
  render() {
    return (
      <div>
        <DatePicker onChange={this.handleDateChange}   />
        <TimePicker onChange={this.handleTimeChange}/>
      </div>
    );
  },
});


export default DateTimePicker ;

// ReactDOM.render(<DateTimePicker onSelect={onSelect} />
// , mountNode);
