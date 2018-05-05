import React from 'react'
import {View} from 'react-native'
import MapView from 'react-native-maps'

import styles from '../styles'

const Marker = props => (
  <MapView.Marker coordinate={props.coordinate}>
    <View style={styles.markerWrap}>
      <View style={styles.ring} />
      <View style={styles.marker} />
    </View>
  </MapView.Marker>
)

export default Marker
