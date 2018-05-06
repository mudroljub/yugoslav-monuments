import React from 'react'
import {View, TouchableHighlight, Image} from 'react-native'

import Map from './components/Map'
import Scroller from './components/Scroller'
import Geolocation from './components/Geolocation'
import styles from './styles'

const App = props => (
  <View style={styles.container}>
    <Map/>
    <Geolocation/>
    <Scroller/>
  </View>
)

export default App
