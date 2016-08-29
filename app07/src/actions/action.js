export const UPDATE_FIELDVALUE = "updateFieldValue" ;
export const REST_ALLFILEDS = "resetAllFileds" ;

export function updateFieldValue(param){
    return {type:UPDATE_FIELDVALUE,param} ;
}

export function resetAllFileds(){
  return {type:REST_ALLFILEDS} ;
}
