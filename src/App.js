import React, { Component } from 'react'
import {View, ScrollView} from 'react-native'
import MapView from 'react-native-maps'
import {connect} from 'react-redux'

import Marker from './components/Marker'
import Card from './components/Card'
import styles from './styles'

class App extends Component {
  // prebaciti u akcije, menja region
  centerMap = marker => {
    this.map.animateToRegion({
      ...marker.coordinate,
      latitudeDelta: this.props.region.latitudeDelta,
      longitudeDelta: this.props.region.longitudeDelta,
    }, 350)
  }

  renderMarker = (marker, i) => (
    <Marker key={i} coordinate={marker.coordinate} />
  )

  renderCard = (marker, i) => (
    <Card key={i} marker={marker} centerMap={this.centerMap} />
  )

  render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={map => this.map = map}
          initialRegion={this.props.region}
          style={styles.container}
        >
          {this.props.monuments.map(this.renderMarker)}
        </MapView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.props.monuments.map(this.renderCard)}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({region, monuments}) => ({
  region, monuments
})

export default connect(mapStateToProps)(App)
