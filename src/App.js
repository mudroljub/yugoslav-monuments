import React, { Component } from 'react'
import {View, ScrollView} from 'react-native'
import MapView from 'react-native-maps'
import {connect} from 'react-redux'

import {focusRegion} from './state'
import Marker from './components/Marker'
import Card from './components/Card'
import styles from './styles'

const mapStateToProps = ({region, monuments}) => ({region, monuments})

@connect(mapStateToProps)
export default class App extends Component {

  centerMap = marker => {
    const region = {...this.props.region, ...marker.coordinate}
    this.props.dispatch(focusRegion(region))
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
          region={this.props.region}
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
