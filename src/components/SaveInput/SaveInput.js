import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './SaveInput.styles'

const SaveInput = ({todoItem,onChange}) => {
  return (
    <View style = {styles.container}>
     <TextInput value = {todoItem} onChangeText={onChange} style = {styles.input} placeholder='Yapılacak...'
     placeholderTextColor="#fff" 
     />
    </View>
  )
}

export default SaveInput
