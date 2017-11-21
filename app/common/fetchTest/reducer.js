import * as actions from './actions';

export default function(state = {p: 10}, action) {
  switch(action.type) {
    case 'FETCH_STARTED':
      return state;
    case 'FETCH_FULFILLED':
      console.log('in reducer')
      console.log(action.payload)
      return Object.assign({}, { data: action.payload.data })
  }
  return state;
}
