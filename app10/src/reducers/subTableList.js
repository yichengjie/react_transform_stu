import {UPDATE_SUBTABLE_FIELDVALUE,ADD_LINE196,DELETE_LINE196} from '../constants/constant.js' ;
 import uniquid from 'uniquid' ;

const listSubTable = (state=[{id:"1"},{id:"2"},{id:"3"}],action) =>{
  switch (action.type) {
    case ADD_LINE196 : {
       var obj = {id:uniquid('t196_')} ;
      return [...state,obj] ;
    }
    case DELETE_LINE196 :{
      let id = action.id ;
      if(id&&id.length>0){
        return state.filter(item=>{
          if(item.id!=id){
            return true ;
          }
        }) ;
      }else{
        //list4.slice(0,list4.length-1) 
        return state.slice(0,state.length-1) ;
      }
    }
    case UPDATE_SUBTABLE_FIELDVALUE:
      return state ;
    default:
      return state ;
  }
};

export default listSubTable ;
