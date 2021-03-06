"use strict" ;

import {UPDATE_FIELDVALUE,FETCH_FIELDS_UPDATE} from '../constants/constant.js' ;
let PROJECT_FIELDS_NAMES = ["insurance","propertyTax"] ;

const toProjectFields = (project) => {
  const fields = {};
  PROJECT_FIELDS_NAMES.forEach((name) => {
    fields[name] = {
      value: project[name]
    };
  });
  return fields;
};

const getNewFormState = (state, field) => {
  const fields = {
    ...state,
    ...field
  };
  return {
    ...fields
  };
};

let initialState = {
  insurance:{value:"yicj"},
  propertyTax:{value:"hello"},
  startDate:{value:"2016-09-03 12:24:59"},
  endDate:{value:"2016-09-05 12:24:50"},
  rangeDate:{value:["2016-09-05","2016-09-06"]}
} ;

const form = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELDVALUE:
      return getNewFormState(state, action.param);
    case FETCH_FIELDS_UPDATE:
      const fields = toProjectFields(action.param);
      return getNewFormState(state, fields);
    default:
      return state;
  }
};

export default form ;
