import * as types from '../actions/actionTypes';
import sortFunction from '../utils/sortFunctions';

export default function camperReducer(state=[], action) {
  switch(action.type) {
    case types.LOAD_CAMPERS_SUCCESS:
      return {
        campers: action.campers,
        sortBy: 'Past30Desc'
      }
    case types.SORT:
      return {
        campers: [...state.campers].sort(sortFunction(action.sortBy)),
        sortBy: action.sortBy
      };

    default:
      return state;
  }
}
