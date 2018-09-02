import React, { Component } from 'react'
import { 
    Text, 
    View,
    TouchableOpacity
 } from 'react-native';
 import { Ionicons } from '@expo/vector-icons';
 import { styles } from './../../style';

const TodoList = ({todos, toggleTodo, deleteTodo}) => (
    <View>
        {todos.map(
            todo => 
            <View style={styles.todoContainer} key={todo.id}>
                <TouchableOpacity style={{flex:1}} onPress={() => toggleTodo(todo.id)} >
                    <Text style={{
                        fontSize:20,
                        padding:10,
                        textDecorationLine: todo.completed ? 'line-through':'none'
                    }}>
                        {todo.text}
                    </Text>
                </TouchableOpacity>
                {todo.completed ? <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                <View style={styles.buttomDelete}>
                    <Ionicons 
                        name="md-close"
                        size={20} 
                        style={{color:'#fff'}} 
                        />
                </View>
            </TouchableOpacity>: <View></View>}
            </View>
                
        )}
    </View>
)

export default TodoList;