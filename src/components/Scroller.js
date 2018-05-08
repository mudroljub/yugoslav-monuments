import React from 'react'
import {ScrollView} from 'react-native'
import {connect} from 'react-redux'

import Card from './Card'
import styles from '../styles'

const Scroller = ({monuments}) => (
  <ScrollView horizontal
    style={styles.scrollView}
  >
    {monuments
      .filter(marker => marker.image)
      .map((marker, i) => <Card key={i} marker={marker} />
    )}
  </ScrollView>
)

const mapStateToProps = ({monuments}) => ({monuments})

export default connect(mapStateToProps)(Scroller)
