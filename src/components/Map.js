import React, {Component} from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import {connect} from 'react-redux'

import {setRegion} from '../state'
import Markers from './Markers'
import mapStyle from './mapStyle'
import styles from '../styles'

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
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        region={this.props.region}
        style={styles.container}
        customMapStyle={mapStyle}
        showsMyLocationButton={true}
        showsUserLocation={true}
      >
        <Markers/>
      </MapView>
    )
  }
}

const mapStateToProps = ({region}) => ({region})
const mapDispatchToProps = {setRegion}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
