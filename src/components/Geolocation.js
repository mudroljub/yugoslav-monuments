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
      error => Alert.alert('Info', error.message)
    )
  }

  render() {
    return (
      <Text style={styles.geolocation}>&#10029;</Text>
    )
  }
}

const mapStateToProps = ({region}) => ({region})
const mapDispatchToProps = {focusRegion}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocation)