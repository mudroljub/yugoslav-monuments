import React, { Component } from "react"
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native"
import MapView from "react-native-maps"
import {connect} from 'react-redux'

import styles from './styles'

class App extends Component {
  centerMap = marker => {
    this.map.animateToRegion({
      ...marker.coordinate,
      latitudeDelta: this.props.region.latitudeDelta,
      longitudeDelta: this.props.region.longitudeDelta,
    }, 350)
  }

  renderMarker = (marker, i) => (
    <MapView.Marker key={i} coordinate={marker.coordinate}>
      <View style={styles.markerWrap}>
        <View style={styles.ring} />
        <View style={styles.marker} />
      </View>
    </MapView.Marker>
  )

  renderCard = (marker, i) => (
    <TouchableOpacity style={styles.card} key={i} onPress={() => this.centerMap(marker)}>
      <Image source={marker.image} style={styles.cardImage} resizeMode="cover" />
      <View style={styles.textContent}>
        <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
        <Text numberOfLines={1} style={styles.cardDescription}>
          {marker.description}
        </Text>
      </View>
    </TouchableOpacity>
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
