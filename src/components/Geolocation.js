import React, {Component} from 'react'
import {TouchableHighlight, Image, Alert} from 'react-native'
import {connect} from 'react-redux'

import {focusRegion} from '../state'
import styles from '../styles'

const infoMessage = 'You should enable location on your device for full functionality.'

class Geolocation extends Component {
  componentDidMount() {
    this.center()
  }

  center = () => {
    navigator.geolocation.getCurrentPosition(
      position => focusRegion({
        ...this.props.region,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }),
      error => Alert.alert(error.message, infoMessage)
    )
  }

  render() {
    return (
      <TouchableHighlight onPress={this.center}>
        <Image
          style={styles.geolocation}
          source={require('../images/geolocation.png')}
        />
      </TouchableHighlight>
    )
  }
}

const mapStateToProps = ({region}) => ({region})
const mapDispatchToProps = {focusRegion}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocation)
