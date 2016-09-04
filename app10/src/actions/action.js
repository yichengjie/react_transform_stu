import {UPDATE_FIELDVALUE,FETCH_FIELDS_UPDATE,
  UPDATE_SUBTABLE_FIELDVALUE,ADD_TBLINE,DELETE_TBLINE} from '../constants/constant.js' ;

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
export function addTbLine(param){
  return {type:ADD_TBLINE,param}
}
export function deleteTbLine(param){
  return {type:DELETE_TBLINE,param}
}
/////////////////////table196 end///////////////////////////////////