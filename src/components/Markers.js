import React from 'react'
import {Marker} from 'react-native-maps'
import {connect} from 'react-redux'

import InfoWindow from './InfoWindow'
import styles from '../styles'

const toggleInfoWindow = (ref, marker, currentPlaceId) => {
  if (!ref) return
  if (marker.googlePlaceId === currentPlaceId)
    ref.showCallout()
  else {
    ref.hideCallout()
  }
}

const Markers = ({monuments, currentPlaceId}) => (
  monuments.map((marker, i) =>
    <Marker key={i}
      ref={ref => toggleInfoWindow(ref, marker, currentPlaceId)}
      coordinate={marker.coordinate}
      image={require('../images/marker.png')} >
      <InfoWindow marker={marker} />
    </Marker>
  )
)

const mapStateToProps = ({monuments, currentPlaceId}) => ({
  monuments,
  currentPlaceId
})

export default connect(mapStateToProps)(Markers)
