import React, { Component } from "react"
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native"
import MapView from "react-native-maps"

import styles from './styles.js'

export default class App extends Component {
  state = {
    monuments: [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817,
        },
        title: "Best Place",
        description: "This is the best place in Portland",
        image: { uri: "https://i.imgur.com/sNam9iJ.jpg" },
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507,
        },
        title: "Second Best Place",
        description: "This is the second best place in Portland",
        image: { uri: "https://i.imgur.com/N7rlQYt.jpg" },
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034,
        },
        title: "Third Best Place",
        description: "This is the third best place in Portland",
        image: { uri: "https://i.imgur.com/UDrH0wm.jpg" },
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917,
        },
        title: "Fourth Best Place",
        description: "This is the fourth best place in Portland",
        image: { uri: "https://i.imgur.com/Ka8kNST.jpg" },
      },
    ],
    region: {
      latitude: 43.0602992,
      longitude: 18.5701971,
      latitudeDelta: 0.3, // zoom
      longitudeDelta: 0.3,
    },
  }

  centerMap = marker => {
    this.map.animateToRegion({
      ...marker.coordinate,
      latitudeDelta: this.state.region.latitudeDelta,
      longitudeDelta: this.state.region.longitudeDelta,
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
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.monuments.map(this.renderMarker)}
        </MapView>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.monuments.map(this.renderCard)}
        </ScrollView>
      </View>
    )
  }
}
