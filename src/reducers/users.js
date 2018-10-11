import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions';

const initialState = {
  data: [],
  error: false,
  isFetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        data: [...action.payload.data],
        isFetching: false,
        error: false
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: true
      }
    default:
      return { ...state };
  }
}