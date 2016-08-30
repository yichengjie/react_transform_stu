import {UPDATE_FIELDVALUE,FETCH_FIELDS_UPDATE} from '../constants/constant.js' ;

export function updateFieldValue(param){
    return {type:UPDATE_FIELDVALUE,param} ;
}

export function fetchFieldsUpdate(param){
  return {type:FETCH_FIELDS_UPDATE,param} ;
}
