// isprobati prost primer mapa https://github.com/react-community/react-native-maps
// mozda izbaciti animacije
import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native"
import MapView from "react-native-maps"

const { width, height } = Dimensions.get("window")

const CARD_HEIGHT = height / 4
const CARD_WIDTH = CARD_HEIGHT - 50

export default class App extends Component {
  state = {
    markers: [
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
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  }

  componentWillMount() {
    this.index = 0
    this.animation = new Animated.Value(0)
  }

  componentDidMount() {
    const {markers, region} = this.state
    // should detect when scrolling has stopped then animate
    // should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3) // animate 30% away from landing on the next item
      if (index >= markers.length) index = markers.length - 1
      if (index <= 0) index = 0
      if (this.index === index) return

      this.index = index
      const {coordinate} = markers[index]
      this.map.animateToRegion({
        ...coordinate,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta,
      }, 350)
    })
  }

  handleMarkerTouch = () => {
    Alert.alert('You tapped the button!')
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
    <TouchableOpacity style={styles.card} key={i} onPress={this.handleMarkerTouch}>
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
          {this.state.markers.map(this.renderMarker)}
        </MapView>

        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {x: this.animation}
              }
            }],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map(this.renderCard)}
        </Animated.ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
})

AppRegistry.registerComponent("App", () => App)
