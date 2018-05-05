import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

import styles from '../styles'

const Card = props => (
  <TouchableOpacity style={styles.card} onPress={() => props.centerMap(props.marker)}>
    <Image source={props.marker.image} style={styles.cardImage} resizeMode='cover' />
    <View style={styles.textContent}>
      <Text numberOfLines={1} style={styles.cardtitle}>{props.marker.title}</Text>
      <Text numberOfLines={1} style={styles.cardDescription}>
        {props.marker.description}
      </Text>
    </View>
  </TouchableOpacity>
)

export default Card
