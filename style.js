import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    todoInput:{
        flex:1,
        fontSize: 20,
        height: 35,
        marginHorizontal: 20,
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'silver',
    },
    todoContainer:{
        flexDirection: 'row',
    },
    buttomAdd:{
        backgroundColor: '#87CEFA',
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50,
        margin: 10,
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: 0.3,

        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    buttomDelete:{
        backgroundColor: 'red',
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 50,
        marginRight: 10,
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'black',
        shadowOpacity: 0.3,

        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    }
  });