import {UPDATE_SUBTABLE_FIELDVALUE,ADD_LINE196,DELETE_LINE196} from '../constants/constant.js' ;
 import uniquid from 'uniquid' ;

const listSubTable = (state=[],action) =>{
  switch (action.type) {
    case ADD_LINE196 : {
       let id = uniquid('t196_');
       var obj = {id} ;
      return [...state,obj] ;
    }
    case DELETE_LINE196 :{
      return state ;
    }
    case UPDATE_SUBTABLE_FIELDVALUE:
      return state ;
    default:
      return state ;
  }
};

export default listSubTable ;
