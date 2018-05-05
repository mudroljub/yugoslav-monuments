import React from "react"
import Expo from 'expo'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './state'
import App from './App'

const store = createStore(reducer)

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

Expo.registerRootComponent(AppWithStore)
