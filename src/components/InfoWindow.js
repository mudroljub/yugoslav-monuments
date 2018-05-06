import React from 'react'
import {Text, View, Image} from 'react-native'
import {showLocation} from 'react-native-map-link'
import {Callout} from 'react-native-maps'

import styles from '../styles'

const InfoWindow = ({marker}) => (
  <Callout onPress={() => {
      const {latitude, longitude} = marker.coordinate
      showLocation({latitude, longitude})
    }}>
    <Image source={{uri: marker.image}} resizeMode='contain' />
    <View style={styles.container}>
      <Text style={styles.cardtitle}>{marker.title}</Text>
      <Text style={styles.cardDescription}>{marker.description}</Text>
      <Text style={styles.cardDescription}>(click to find a route)</Text>
    </View>
  </Callout>
)

export default InfoWindow
