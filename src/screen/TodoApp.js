import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { styles } from '../../style';

import AddTodo from '../components/AddTodo';
import VisibleTodos from '../components/VisibleTodos';

class TodoApp extends React.Component {
  render() {
    return (
    <View style={styles.container}>
        <SafeAreaView>
            <AddTodo />
            <View>
              <VisibleTodos />
            </View>
        </SafeAreaView>  
    </View>
    )
  }
}

export default TodoApp;