import * as types from '../actions/actionTypes';
import sortFunction from '../utils/sortFunctions';

const initialState = {
    sortBy: types.SORT_TYPES.PAST_30_DESC
}
export default function camperReducer(state=initialState, action) {
  switch(action.type) {
    case types.LOAD_CAMPERS_SUCCESS:
      return {
        campers: action.campers,
          sortBy: types.SORT_TYPES.PAST_30_DESC
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
