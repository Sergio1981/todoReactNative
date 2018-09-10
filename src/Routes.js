import { createStackNavigator } from "react-navigation";

//Rotas
import TodoApp from './screen/TodoApp';

const Routes = createStackNavigator({
    home: { 
        screen: TodoApp,
        navigationOptions: ({ navigation }) => ({
            title: 'Tarefas',
            headerBackTitle: null
        })
    },
    
},
{
    initialRouteName: 'home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#708090',
        height: 30,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      },
      headerTitleContainerStyle:{
        marginTop:-20
      },
      headerLeftContainerStyle:{
        marginTop:-20
      },
      headerRigthContainerStyle:{
        marginTop:-20
      }
  }
})

export default Routes;