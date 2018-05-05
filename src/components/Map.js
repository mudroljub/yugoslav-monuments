import React from 'react'
import {Text, View, Image} from 'react-native'
import {showLocation} from 'react-native-map-link'
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps'
import {connect} from 'react-redux'

import styles from '../styles'
import mapStyle from './mapStyle'

const Map = ({region, monuments}) => (
  <MapView
    provider={PROVIDER_GOOGLE}
    region={region}
    style={styles.container}
    customMapStyle={mapStyle}
    >
    {monuments.map((marker, i) =>
      <Marker key={i}
        coordinate={marker.coordinate}
        image={require('./marker.png')}
      >
        <Callout onPress={() => {
            const {latitude, longitude} = marker.coordinate
            showLocation({
                latitude,
                longitude,
                googlePlaceId: marker.googlePlaceId,
            })
          }}>
          <Image source={{uri: marker.image}} resizeMode='contain' />
          <View style={styles.textContent}>
            <Text style={styles.cardtitle}>{marker.title}</Text>
            <Text style={styles.cardDescription}>{marker.description}</Text>
          </View>
        </Callout>
      </Marker>
    )}
  </MapView>
)

const mapStateToProps = ({region, monuments}) => ({region, monuments})

export default connect(mapStateToProps)(Map)
