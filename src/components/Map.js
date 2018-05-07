import React from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import {connect} from 'react-redux'

import InfoWindow from './InfoWindow'
import mapStyle from './mapStyle'
import styles from '../styles'

const toggleInfoWindow = (ref, marker, currentPlaceId) => {
  if (!ref) return
  if (marker.googlePlaceId === currentPlaceId)
    ref.showCallout()
  else {
    ref.hideCallout()
  }
}

const Map = ({region, monuments, currentPlaceId}) => (
  <MapView
    provider={PROVIDER_GOOGLE}
    region={region}
    style={styles.container}
    customMapStyle={mapStyle}
    showsMyLocationButton={true}
    showsUserLocation={true}
    >
    {monuments.map((marker, i) =>
      <Marker key={i}
        ref={ref => toggleInfoWindow(ref, marker, currentPlaceId)}
        coordinate={marker.coordinate}
        image={require('../images/marker.png')} >
        <InfoWindow marker={marker} />
      </Marker>
    )}
  </MapView>
)

const mapStateToProps = ({region, monuments, currentPlaceId}) => ({
  region,
  monuments,
  currentPlaceId
})

export default connect(mapStateToProps)(Map)
