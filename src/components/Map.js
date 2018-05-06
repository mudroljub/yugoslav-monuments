import React from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import {connect} from 'react-redux'

import InfoWindow from './InfoWindow'
import mapStyle from './mapStyle'
import styles from '../styles'

const Map = ({region, monuments}) => (
  <MapView provider={PROVIDER_GOOGLE} region={region}
    style={styles.container} customMapStyle={mapStyle} >
    {monuments.map((marker, i) =>
      <Marker key={i}
        coordinate={marker.coordinate}
        image={require('../marker.png')} >
        <InfoWindow marker={marker} />
      </Marker>
    )}
  </MapView>
)

const mapStateToProps = ({region, monuments}) => ({region, monuments})

export default connect(mapStateToProps)(Map)
