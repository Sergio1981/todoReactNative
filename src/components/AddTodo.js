import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../style';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class AddTodo extends React.Component {
    state={
        text:''
    }

    addTodo = (text) =>{
        this.props.dispatch(addTodo(text));
        this.setState({text:''})
    }


    render() {
        return (
        <View style={styles.todoContainer}>
            <TextInput 
                onChangeText={(text)=>{this.setState({text})}}
                value={this.state.text}
                placeholder={'Adicione seu To do'}
                style={styles.todoInput}
            />
            <TouchableOpacity onPress={()=> this.addTodo(this.state.text)}>
                <View style={styles.buttomAdd}>
                    <Ionicons 
                        name="md-add"
                        size={30} 
                        style={{color:'#fff'}} 
                        />
                </View>
            </TouchableOpacity>
        </View>
        )
  }
}

export default connect()(AddTodo);