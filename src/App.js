import React from 'react'
import {View} from 'react-native'

import Map from './components/Map'
import Scroller from './components/Scroller'
import styles from './styles'

const App = props => (
  <View style={styles.container}>
    <Map/>
    <Scroller/>
  </View>
)

export default App
