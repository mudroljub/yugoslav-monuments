import React, {Component} from 'react'
import {ScrollView, Text, View} from 'react-native'
import {connect} from 'react-redux'

import Card from './Card'
import styles from '../styles'

class Scroller extends Component {
  constructor(props) {
    super(props)
    this.state = {hidden: false}
  }

  render() {
    return (
      <View style={styles.scrollView}>
        <Text style={styles.bigSize}
          onPress={() => this.setState({hidden: !this.state.hidden})}
        >&#9650;</Text>
        <ScrollView horizontal style={this.state.hidden && {display: 'none'}}>
          {this.props.monuments
            .filter(marker => marker.image)
            .map((marker, i) => <Card key={i} marker={marker}/>)
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({monuments}) => ({monuments})

export default connect(mapStateToProps)(Scroller)
