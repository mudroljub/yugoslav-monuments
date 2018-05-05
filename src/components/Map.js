import React from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
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
        title={marker.title}
        description={marker.description}
        image={require('./marker.png')}
      />
    )}
  </MapView>
)

const mapStateToProps = ({region, monuments}) => ({region, monuments})

export default connect(mapStateToProps)(Map)
