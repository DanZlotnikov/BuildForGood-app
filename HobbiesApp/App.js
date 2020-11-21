import React, { useEffect, useState } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from './screens/Login'
import Signup from './screens/Signup'
import HobbiesPicker from './screens/HobbiesPicker'
import BottomMenu from './components/BottomMenu'
import Settings from './screens/Settings'
import Profile from './screens/Profile'
import History from './screens/History'
import Onboarding1 from './screens/onboarding/Onboarding1'
import Onboarding2 from './screens/onboarding/Onboarding2'
import Onboarding3 from './screens/onboarding/Onboarding3'
import Onboarding4 from './screens/onboarding/Onboarding4'
import Room from './screens/Room'
import Rewards from './screens/Rewards'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import usersReducer from './reducers/UsersReducer'
import api from './api/api.js'
import { BackHandler } from 'react-native'

const store = createStore(usersReducer)

const rootStack = createStackNavigator(
  {
    Login,
    Signup,
    HobbiesPicker,
    Settings,
    Profile,
    Onboarding1,
    Onboarding2,
    Onboarding3,
    Onboarding4,
    Room,
    History,
    Rewards
  },
  {
    initialRouteName: 'Onboarding1',
    headerMode: 'none',
    navigationOptions: {
      headerShown: false,
    }
  }
)

const AppContainer = createAppContainer(rootStack)

class App extends React.Component {
    render() {
    var bottomMenu = store.getState().usersReducer.showBottomMenu ? <BottomMenu /> : null
      return (
        <Provider store={store}>
          <AppContainer/>
          {/* <BottomMenu /> */}
        </Provider>
      )
}
}

export default App