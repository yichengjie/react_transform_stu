
import { combineReducers } from 'redux' ;
import {UPDATE_FIELDVALUE} from '../actions/action.js' ;
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

const getNewFormState = (state, payload) => {
  const fields = {
    ...state,
    ...payload
  };
  return {
    ...fields
  };
};

let initialState = {
  insurance:{value:"yicj test"},
  propertyTax:{value:"hello"}
} ;

const form = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELDVALUE:
      return getNewFormState(state, action.param);
    case 'FETCH_PROJECT_SUCCESS':
      const fields = toProjectFields(action.payload);
      return getNewFormState(state, fields);
    default:
      return state;
  }
};

export default combineReducers({
  form
});
