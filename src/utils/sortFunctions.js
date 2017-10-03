/* eslint default-case: 0 */
import { SORT_TYPES } from '../actions/actionTypes';

const sortFunction = (sortTypeString) => {
  switch (sortTypeString) {
    case SORT_TYPES.NAME_DESC:
      return (a, b) => {
        let nameA = a.username.toUpperCase();
        let nameB = b.username.toUpperCase();
        return nameA < nameB ? -1 : 1;
      }
    case SORT_TYPES.NAME_ASC:
      return (a, b) => {
        let nameA = a.username.toUpperCase();
        let nameB = b.username.toUpperCase();
        return nameA < nameB ? 1 : -1;
      }
    case SORT_TYPES.PAST_30_DESC:
      return (a, b) => b.recent - a.recent;
    case SORT_TYPES.PAST_30_ASC:
      return (a, b) => a.recent - b.recent;
    case SORT_TYPES.ALL_TIME_DESC:
      return (a, b) => b.alltime - a.alltime;
    case SORT_TYPES.ALL_TIME_ASC:
      return (a, b) => a.alltime - b.alltime;
  }
}


export default sortFunction;
