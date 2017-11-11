import * as types from './actionTypes';
import fccApi from '../api/fccApi';

export function loadCampersSuccess(campers) {
  return {type: types.LOAD_CAMPERS_SUCCESS, campers};
}

//Thunk
export function loadCampers() {
  //Thunks return a function rather than an object
  return function(dispatch) {
    return fccApi.getCampers()
    //fccApi.getCampers returns a promise
    .then(campers => {
    //dispatch an action creator once we get the campers back from the api
    dispatch(loadCampersSuccess(campers));
  })
    .catch(error => {
      throw(error);
    });
  };
}

export function sort(sortType) {
  return {type: types.SORT,
          sortBy: sortType}
}
