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
    <View style={styles.textContent}>
      <Text style={styles.cardtitle}>{marker.title}</Text>
      <Text style={styles.cardDescription}>{marker.description}</Text>
    </View>
  </Callout>
)

export default InfoWindow
