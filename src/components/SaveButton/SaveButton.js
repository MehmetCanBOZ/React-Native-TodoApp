import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './SaveButton.styles'

const SaveButton = ({onPress}) => {
  return (
   <View style={styles.container}> 
    <TouchableOpacity
    onPress={onPress}
    style={styles.button}
    >
      <Text style={styles.text}>Kaydet</Text>
    </TouchableOpacity>
  </View>
  )
}

export default SaveButton
