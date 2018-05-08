import React, {Component} from 'react'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import {connect} from 'react-redux'

import {setRegion} from '../state'
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

class Map extends Component {
  componentDidMount() {
    this.center()
  }

  center = () => {
    navigator.geolocation.getCurrentPosition(
      location => this.props.setRegion({...this.props.region, ...location.coords}),
      this.handleErorr
    )
  }

  handleErorr = error => {
    if (error.message == 'Location services are disabled')
      Alert.alert(error.message, 'Please enable geolocation.')
    else
      Alert.alert('Error', error.message)
  }

  render() {
    const {region, monuments, currentPlaceId} = this.props
    return (
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
  }
}

const mapStateToProps = ({region, monuments, currentPlaceId}) => ({
  region,
  monuments,
  currentPlaceId
})
const mapDispatchToProps = {setRegion}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
