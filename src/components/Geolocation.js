import React, { Component } from 'react'
import {TouchableOpacity, Image, Text, Alert} from 'react-native'
import {connect} from 'react-redux'

import {focusRegion} from '../state'
import styles from '../styles'

class Geolocation extends Component {
  componentDidMount() {
    this.center()
  }

  center = () => {
    navigator.geolocation.getCurrentPosition(
      location => this.props.focusRegion({...this.props.region, ...location.coords}),
      handleErorr
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
      <Text onPress={this.center} style={styles.geolocation}>&#10029;</Text>
    )
  }
}

const mapStateToProps = ({region}) => ({region})
const mapDispatchToProps = {focusRegion}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocation)
