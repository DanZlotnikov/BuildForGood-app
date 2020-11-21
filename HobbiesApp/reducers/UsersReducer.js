import { combineReducers } from 'redux'
import api from '../api/api.js'

const INITIAL_STATE = {
  profile: {},
  profileLoaded: false,
  showBottomMenu: false
}

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_BOTTOM_MENU':
      {
        state.showBottomMenu = true
        console.log('showBottomMenu')
        return state
      }
    case 'GET_PROFILE':
      {
        state.profile = action.payload
        console.log('getprofile', state.profile)
        state.profileLoaded = true
        return state
      }
    default:
      return state
  }
};

export default combineReducers({
    usersReducer
});