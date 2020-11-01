import { combineReducers } from 'redux';

const INITIAL_STATE = {
  users: []
}

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
    usersReducer
});