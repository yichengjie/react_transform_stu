import {UPDATE_SUBTABLE_FIELDVALUE} from '../constants/constant.js' ;

const data = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号',
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号',
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号',
}];

const listSubTable = (state=data,action) =>{
  switch (action.type) {
    case UPDATE_SUBTABLE_FIELDVALUE:
      return state ;
    default:
      return state ;
  }
};

export default listSubTable ;
