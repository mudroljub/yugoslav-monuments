import React, { Component } from 'react'
import {View, ScrollView} from 'react-native'
import MapView from 'react-native-maps'
import {connect} from 'react-redux'

import Marker from './components/Marker'
import Card from './components/Card'
import styles from './styles'

const App = ({region, monuments}) => (
  <View style={styles.container}>
    <MapView region={region} style={styles.container} >
      {monuments.map((marker, i) =>
        <Marker key={i} coordinate={marker.coordinate} />
      )}
    </MapView>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.endPadding}
    >
      {monuments.map((marker, i) =>
        <Card key={i} marker={marker} />
      )}
    </ScrollView>
  </View>
)

const mapStateToProps = ({region, monuments}) => ({region, monuments})

export default connect(mapStateToProps)(App)
