import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import {setRegion, choosePlace} from '../state'
import styles from '../styles'

const Card = ({marker, region, setRegion, choosePlace}) => (
  <TouchableOpacity style={styles.card}
    onPress={() => {
      choosePlace(marker.googlePlaceId)
      setRegion({...region, ...marker.coordinate})
    }}
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
const mapDispatchToProps = {setRegion, choosePlace}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
