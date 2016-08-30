import {UPDATE_SUBTABLE_FIELDVALUE} from '../constants/constant.js' ;

const listSubTable = (state={},action) =>{
  switch (action.type) {
    case UPDATE_SUBTABLE_FIELDVALUE:
      return state ;
    default:
      return state ;
  }
};

export default listSubTable ;
