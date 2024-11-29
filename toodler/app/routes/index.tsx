import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
    AllBoards: undefined;
    Lists: undefined;
    CreateBoard: undefined;
    TaskList: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

/* Import view components */
import AllBoards from '../views/AllBoards';
import Lists from '../views/Eachlists';
import CreateBoard from '../views/CreateBoard';
import TaskList from '../views/Eachtasks'
import EditBoard from '../views/editBoard';

const Routes: React.FC = () => {
  return (
    
      <Stack.Navigator initialRouteName="AllBoards">
        <Stack.Screen name="AllBoards" component={AllBoards} />
        <Stack.Screen name="Lists" component={Lists} />
        <Stack.Screen name="CreateBoard" component={CreateBoard} />
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="EditBoard" component={EditBoard}/>
      </Stack.Navigator>
    
  );
}

export default Routes;




