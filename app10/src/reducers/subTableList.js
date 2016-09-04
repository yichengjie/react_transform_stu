import {UPDATE_SUBTABLE_FIELDVALUE,ADD_LINE196,DELETE_LINE196} from '../constants/constant.js' ;


let initSate = {
  list196:[]
} ;

function addLine(param,state){
  let {tbname,obj} = param ;
  let list = [...state[tbname],obj]  ;
  return Object.assign({},state,{[tbname]:list}) ;
}

function deleteLine(param,state){
  let {tbname,id} = param ;
  let list = state[tbname] ;
  let newList = [] ;
  if(id&&id.length>0){
     newList = list.filter(item=>{
       if(item.id!=id){
         return true ;
       }
     }) ;
   }else{
     newList = list.slice(0,list.length-1) ;
   }
   return Object.assign({},state,{[tbname]:newList}) ;
}

const listSubTable = (state=initSate,action) =>{
  switch (action.type) {
    case ADD_LINE196 : 
      return addLine(action.param,state) ;
    case DELETE_LINE196 :{
      return deleteLine(action.param,state) ;
    }
    case UPDATE_SUBTABLE_FIELDVALUE:
      return state ;
    default:
      return state ;
  }
};

export default listSubTable ;
