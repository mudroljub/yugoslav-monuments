import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import {focusRegion} from '../state'
import styles from '../styles'

const Card = ({marker, region, focusRegion}) => (
  <TouchableOpacity style={styles.card}
    onPress={() => focusRegion({...region, ...marker.coordinate})}
  >
    <Image
      source={{uri: marker.image}}
      style={styles.cardImage}
      resizeMode='cover' />
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
      <Text numberOfLines={1} style={styles.cardDescription}>
        {marker.description}
      </Text>
    </View>
  </TouchableOpacity>
)

const mapStateToProps = ({region}) => ({region})
const mapDispatchToProps = {focusRegion}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
