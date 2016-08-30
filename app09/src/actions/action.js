import {UPDATE_FIELDVALUE,FETCH_FIELDS_UPDATE,UPDATE_SUBTABLE_FIELDVALUE} from '../constants/constant.js' ;

export function updateFieldValue(param){
    return {type:UPDATE_FIELDVALUE,param} ;
}

export function fetchFieldsUpdate(param){
  return {type:FETCH_FIELDS_UPDATE,param} ;
}

export function updateSubTableFieldValue(param){
  return {type:UPDATE_SUBTABLE_FIELDVALUE,param} ;
}
