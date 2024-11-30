import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
    AllBoards: undefined;
    Lists: undefined;
    CreateBoard: undefined;
    TaskList: undefined;
    CreateBoardScreen: undefined;
    EditBoard: undefined;
    CreateTask: undefined;
    EditTask: undefined;
    CreateList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

/* Import view components */
import AllBoards from '../views/AllBoards';
import Lists from '../views/Lists/index';
import CreateList from '../views/CreateList';
import CreateBoard from '../views/CreateBoard';
import Tasks from '../views/Tasks'
import EditTask from '../views/EditTask';
import EditBoard from '../views/editBoard';
import CreateTask from '../views/createTask';
import Header from '../components/header';


const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="AllBoards"
      screenOptions={{
        header: (props:any) => <Header {...props} />, // Use custom header globally
      }}
    >
      <Stack.Screen name="AllBoards" component={AllBoards} />
      <Stack.Screen name="Lists" component={Lists} />
      <Stack.Screen name="CreateBoardScreen" component={createBoardScreen} />
      <Stack.Screen name="TaskList" component={Tasks} />
      <Stack.Screen name="EditBoard" component={EditBoard} />
      <Stack.Screen name="EditTask" component={EditTask} />
      <Stack.Screen name="CreateTask" component={CreateTask} />
      <Stack.Screen name="CreateList" component={CreateList} />
    </Stack.Navigator>
  );
};

export default Routes;




