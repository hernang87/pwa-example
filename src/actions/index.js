import config from '../config';

// Action definitions
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


export const fetchUsers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_USERS
    });

    fetch(config.usersUrl, config.fetchOptions)
      .then(response => response.json())
      .then(payload => {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload
        });
      });
  }
}