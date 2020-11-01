import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from './screens/Login'
import Signup from './screens/Signup'
import HobbiesPicker from './screens/HobbiesPicker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import usersReducer from './reducers/UsersReducer'

const store = createStore(usersReducer)

const rootStack = createStackNavigator(
  {
    Login,
    Signup,
    HobbiesPicker
  },
  {
    initialRouteName: 'HobbiesPicker',
    headerMode: 'none',
    navigationOptions: {
      headerShown: false,
    }
  }
)

const AppContainer = createAppContainer(rootStack)

class App extends React.Component {
  render () {
        return (
          <Provider store={store}>
            <AppContainer />
          </Provider>
      )
    }
}

export default App