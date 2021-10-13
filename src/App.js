import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';

import Header from './components/Header/Header';
import SaveButton from './components/SaveButton/SaveButton';
import TodoItem from './components/TodoItem/TodoItem';
import SaveInput from './components/SaveInput/SaveInput';

export default function App() {

  const [todoList,SetTodoList] = useState([]);
  const [todoItem,SetTodoItem] = useState();
  
  const handleOnchange = (text) =>{
    SetTodoItem(text)
  }
  const handlePress = (id) => {
    SetTodoList(todoList.map((item)=>
    item.id === id ? {...item, done: !item.done} : {...item},
    ))
  }
  const handleLongPress = (id) =>{
    Alert.alert(
      "Dou you want to delete the Item?",
      "",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => deleteItem(id) }
      ]
    );
  }
  const deleteItem = (id) => {
    SetTodoList(todoList.filter((item)=> item.id !== id))
  }
  const handleSubmit = () =>{
    if (todoItem === '') {
      Alert.alert('Please enter a task!');
      
    } else if (todoList.some(todo => todo.text === todoItem)) {
      Alert.alert('You cannot re-enter the same task!');
    } else {
      const item = {
        "id":Date.now(),
        "text":todoItem,
        "done":false,
      }
      SetTodoList([...todoList,item])
      
    }
  }
  const renderItem = ({ item }) => (
    <TodoItem id={item.id} onPress={handlePress} longPress = {handleLongPress} text={item.text} isDone = {item.done}/>
  );
  const notCompleted = () =>{
    const todos = todoList.filter((item) => !item.done )
  
    return todos;
  }

  return (
    <View style = {styles.container}>
      <Header todoLenght = {notCompleted().length}/>
      <FlatList
        style = {styles.mainContainer}
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.bottomContainer}>
        <SaveInput textValue = {todoItem} onChange = {handleOnchange}/>
        <SaveButton onPress = {handleSubmit}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#102027',
    justifyContent:'space-between'
  },
  mainContainer:{
    padding:10,
  },
  bottomContainer:{
    padding: 10,
    margin:10,
    backgroundColor:'#37474F',
    borderRadius:10,
    marginBottom:30,
  }
});
