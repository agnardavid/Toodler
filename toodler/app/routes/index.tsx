import React from 'react';
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
import Lists from '../views/Lists';
import CreateBoard from '../views/CreateBoard';
import CreateList from '../views/CreateList';
import TaskList from '../views/Tasks'
import EditBoard from '../views/editBoard';
import createBoardScreen from '../views/createBoardScreen';

const Routes: React.FC = () => {
  return (
    
      <Stack.Navigator initialRouteName="AllBoards">
        <Stack.Screen name="AllBoards" component={AllBoards} />
        <Stack.Screen name="Lists" component={Lists} />
        <Stack.Screen name="CreateBoardScreen" component={createBoardScreen} />
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="EditBoard" component={EditBoard}/>
        <Stack.Screen name="CreateList" component={CreateList}/>
      </Stack.Navigator>
    
  );
}

export default Routes;




