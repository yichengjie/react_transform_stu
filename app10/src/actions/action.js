import {UPDATE_FIELDVALUE,FETCH_FIELDS_UPDATE,
  UPDATE_SUBTABLE_FIELDVALUE,ADD_LINE196,DELETE_LINE196} from '../constants/constant.js' ;

export function updateFieldValue(param){
    return {type:UPDATE_FIELDVALUE,param} ;
}

export function fetchFieldsUpdate(param){
  return {type:FETCH_FIELDS_UPDATE,param} ;
}

export function updateSubTableFieldValue(param){
  return {type:UPDATE_SUBTABLE_FIELDVALUE,param} ;
}

/////////////////////table196 start///////////////////////////////////
export function addLine196(){
  return {type:ADD_LINE196}
}
export function deleteLine196(id){
  return {type:DELETE_LINE196,id}
}
/////////////////////table196 end///////////////////////////////////