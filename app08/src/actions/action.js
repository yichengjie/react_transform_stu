export const UPDATE_FIELDVALUE = "updateFieldValue" ;
export const FETCH_FIELDS_UPDATE = "fetchFieldsUpdate" ;

export function updateFieldValue(param){
    return {type:UPDATE_FIELDVALUE,param} ;
}

export function fetchFieldsUpdate(param){
  return {type:FETCH_FIELDS_UPDATE,param} ;
}
