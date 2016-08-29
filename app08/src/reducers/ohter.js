
import { combineReducers } from 'redux' ;
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
  const totalInvestment = COST_FIELDS_NAMES
    .map((name) => {
      if (fields[name]) {
        return fields[name].value;
      }
      return 0;
    })
    .reduce((x, y) => (add(x, y)));
  return {
    ...fields,
    totalInvestment: {
      value: totalInvestment
    }
  };
};

let initialState = {
  insurance:"yicj",
  propertyTax:"hello"
} ;

const form = (state = initialState, action) => {
  switch (action.type) {
    case 'PROJECT_FORM_CHANGE':
      return getNewFormState(state, action.payload);
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
