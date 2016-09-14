import {UPDATE_SUBTABLE_FIELDVALUE,
  ADD_TBLINE,DELETE_TBLINE,SAVE_SUBTABLE_INPUTDATA} from '../constants/constant.js' ;


let initSate = {
  list183:[{id:'001',name1:'点击添加测试',name2:"xx"}]
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

function saveSubTableInputData(param,state){
  let {tbname,id,...tail} = param ;
    let newList = state[tbname].map((item) => {
      if(item.id === id){
        return Object.assign({},item,tail) ;
      }
      return item ;
    }) ;
    return Object.assign({},state,{[tbname]:newList}) ;
}

function updateInputValue(param,state){
    let {tbname,id,name,value} = param ;
    let newList = state[tbname].map((item) => {
      if(item.id === id){
        item[name] = value ;
      }
      return item ;
    }) ;
    return Object.assign({},state,{[tbname]:newList}) ;
}

const listSubTable = (state=initSate,action) =>{
  switch (action.type) {
    case ADD_TBLINE : 
      return addLine(action.param,state) ;
    case DELETE_TBLINE :{
      return deleteLine(action.param,state) ;
    }
    case UPDATE_SUBTABLE_FIELDVALUE:
      return updateInputValue(action.param,state) ;
    case SAVE_SUBTABLE_INPUTDATA :
      return saveSubTableInputData(action.param,state) ;
    default:
      return state ;
  }
};

export default listSubTable ;
