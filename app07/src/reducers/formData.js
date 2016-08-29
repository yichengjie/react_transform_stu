import {UPDATE_FIELDVALUE,REST_ALLFILEDS} from '../actions/action.js' ;
let initState = {
  name:"yicj"
} ;
let orgState = {
  name:"yicj"
} ;

export default function formData(state = initState, action) {
  switch (action.type) {
    case UPDATE_FIELDVALUE:{
      return Object.assign({},state,action.param) ;
    }
    case REST_ALLFILEDS:
      return orgState;
    default:
      return state ;
  }
}
