import React from 'react'
import { View, Text } from 'react-native'
import styles from './Header.styles'

const Header = ({todoLenght}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yapılacaklar</Text>
      <Text style={styles.text}>{todoLenght}</Text>
    </View>
  )
}

export default Header;
