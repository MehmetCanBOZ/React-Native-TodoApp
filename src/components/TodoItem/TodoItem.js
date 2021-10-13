import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './TodoItem.styles'

const TodoItem = ({id,onPress,text,isDone,longPress}) => {
  
  return (
    <View style={[styles.container , isDone && styles.itemDone]}>
      <TouchableOpacity
      onPress={()=> onPress(id)} onLongPress={()=> longPress(id)}
      style={styles.button}
      >
        <Text style={[styles.text , isDone && styles.decoration]}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TodoItem
